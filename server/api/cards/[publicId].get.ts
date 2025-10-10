import { connectDB } from '@/../server/utils/mongoose'
import { Card } from '@/../server/models/card'

export default defineEventHandler(async (event) => {
  const publicId = getRouterParam(event, 'publicId')
  
  if (!publicId) {
    throw createError({
      statusCode: 400,
      message: 'ID do card não fornecido'
    })
  }
  
  await connectDB()
  
  const card = await Card.findOne({ 
    publicId,
    ativo: true 
  })
  
  if (!card) {
    throw createError({
      statusCode: 404,
      message: 'Card não encontrado'
    })
  }
  
  await Card.updateOne(
    { publicId },
    { $inc: { visualizacoes: 1 } }
  )
  
  return {
    title: card.title,
    message: card.message,
    date: card.date,
    imageUrl: card.imageUrl
  }
})