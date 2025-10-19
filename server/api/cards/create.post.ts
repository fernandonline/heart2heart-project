import { connectDB } from '@/../server/utils/mongoose';
import { User } from '@/../server/models/user';
import { Card } from '@/../server/models/card';
import { generatePublicId } from '@/../server/utils/generatePublicId';

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  
  await connectDB()
  
  let dbUser = await User.findOne({ googleId: user.id })
  
  if (!dbUser) {
    dbUser = await User.create({
      googleId: user.id,
      email: user.email,
      name: user.name,
      urlPic: user.urlPic
    })
  }
  
  const body = await readBody(event)
  
  const card = await Card.create({
    userId: dbUser._id,
    imageUrl: body.imageUrl,
    title: body.title,
    message: body.message,
    date: new Date(body.date) || null,
    publicId: generatePublicId(),
    active: true,
  })
  
    return {
        success: true,
        card: {
            id: card._id,
            publicId: card.publicId,
            title: card.title,
            url: `${getRequestURL(event).origin}/card/${card.publicId}`
        }
    }
})