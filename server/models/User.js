import mongoose from 'mongoose'

    const UserSchema = new mongoose.Schema({
      username: { type: String, required: true },
      password: { type: String, required: true },
      bio: String,
      joined: { type: Date, default: Date.now },
      followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      profilePicture: String,
      email: { type: String, required: true, unique: true },
      verified: { type: Boolean, default: false },
      location: String,
      website: String,
      birthdate: Date,
      coverPhoto: String,
      status: String,
      isPrivate: { type: Boolean, default: false }
    })

    export default mongoose.model('User', UserSchema)
