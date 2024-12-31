import mongoose from 'mongoose'

    const NotificationSchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      type: { type: String, required: true },
      sourceId: { type: mongoose.Schema.Types.ObjectId, required: true },
      createdAt: { type: Date, default: Date.now },
      read: { type: Boolean, default: false },
      content: String
    })

    export default mongoose.model('Notification', NotificationSchema)
