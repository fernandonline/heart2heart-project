import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  urlPic: { type: String }
}, {
  timestamps: true
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)