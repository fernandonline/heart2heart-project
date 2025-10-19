import { connectDB } from '@/../server/utils/mongoose';
import { User } from '@/../server/models/user';
import { Card } from '@/../server/models/card';

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  
  await connectDB()
  
  const dbUser = await User.findOne({ googleId: user.id })
  
  if (!dbUser) {
    return []
  }
  
  const cards = await Card.find({ 
    userId: dbUser._id,
    active: true 
  }).sort({ createdAt: -1 })
  
  return cards.map(card => ({
    id: card._id,
    publicId: card.publicId,
    imageUrl: card.imageUrl,
    message: card.message,
    title: card.title,
    date: card.date,
    url: `${getRequestURL(event).origin}/card/${card.publicId}`
  }))
})