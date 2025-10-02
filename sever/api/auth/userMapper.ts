import {UserModel} from "./types"

export const toUserDto = (model: UserModel) => {
    return {
        name: model.name,
        email: model.email,
        loggedAt: new Date(),
    }
}