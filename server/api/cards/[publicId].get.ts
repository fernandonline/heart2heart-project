import { connectDB } from '@/../server/utils/mongoose'
import { Card } from '@/../server/models/card'

export default defineEventHandler(async (event) => {
  const publicId = getRouterParam(event, 'id')
  
  if (!publicId) {
    throw createError({
      statusCode: 400,
      message: 'ID do card não fornecido'
    })
  }
  
  await connectDB()
  
  const card = await Card.findOne({ 
    publicId,
    active: true 
  })
  
  if (!card) {
    throw createError({
      statusCode: 404,
      message: 'Card não encontrado'
    })
  }
  
  return {
    imageUrl: card.imageUrl,
    title: card.title,
    date: card.date,
    message: card.message,
  }
})