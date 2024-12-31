import mongoose from 'mongoose'

    const DirectMessageSchema = new mongoose.Schema({
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      sentAt: { type: Date, default: Date.now },
      read: { type: Boolean, default: false },
      media: [String]
    })

    export default mongoose.model('DirectMessage', DirectMessageSchema)
