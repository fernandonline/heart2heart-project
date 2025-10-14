import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    const mongoUri = process.env.MONGODB_URI
    
    if (!mongoUri) {
      throw new Error('URI não está definida no .env')
    }

    await mongoose.connect(mongoUri)
  } catch (error) {
    console.error('Erro ao conectar:', error)
    throw error
  }
}