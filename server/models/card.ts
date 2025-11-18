import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publicId: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date },
  message: { type: String, required: true },
  active: { type: Boolean, default: true, index: true },
  deletedAt: { type: Date, default: null },
},
  {
    timestamps: true
})

export const Card = mongoose.models.Card || mongoose.model('Card', cardSchema)