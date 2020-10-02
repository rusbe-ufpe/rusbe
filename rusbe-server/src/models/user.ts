import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: String,
    password: String,
    name: String,
    likes: [String],
    voteRight: [String],
    optionsVoted: [String]
})

export default mongoose.model('User',UserSchema)