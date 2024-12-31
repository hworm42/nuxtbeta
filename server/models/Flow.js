import mongoose from 'mongoose'

    const FlowSchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      likes: { type: Number, default: 0 },
      retweets: { type: Number, default: 0 },
      replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
      media: [String],
      hashtags: [String],
      mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      location: String,
      isPinned: { type: Boolean, default: false },
      isReply: { type: Boolean, default: false }
    })

    export default mongoose.model('Flow', FlowSchema)
