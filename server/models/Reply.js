import mongoose from 'mongoose'

    const ReplySchema = new mongoose.Schema({
      flowId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flow', required: true },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      likes: { type: Number, default: 0 },
      media: [String],
      mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    })

    export default mongoose.model('Reply', ReplySchema)
