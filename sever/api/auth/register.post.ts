import { createError } from "nuxt/app"
import { UserModel } from "./types"
import { toUserDto } from "./userMapper"

export default defineEventHandler(async (event) => {
    await clearUserSession(event)

    const storage = useStorage("data")
    const body = await readBody(event)
    const { name, email, password } = body
    const existingUser = await storage.getItem<UserModel>(email)

    if(existingUser) {
        return sendError(event, createError({statusCode: 400, message: "Esse e-mail já ta sendo utilizado"}))
    }

    const user : UserModel = {
        name,
        email,
        createdAt: new Date(),
        password: await hashPassword(password),
    }

    await storage.setItem(email, user)

    const userDto = toUserDto(user)
    return await setUserSession(event, {
        user: {...userDto}
    })
})