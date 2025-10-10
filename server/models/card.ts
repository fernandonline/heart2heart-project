import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publicId: { type: String, required: true, unique: true },
  
  imageUrl: { type: String },
  title: { type: String, required: true },
  date: { type: Date },
  message: { type: String, required: true },
  
  ativo: { type: Boolean, default: true },
}, {
  timestamps: true
})

export const Card = mongoose.models.Card || mongoose.model('Card', cardSchema)