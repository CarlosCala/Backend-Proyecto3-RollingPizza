import mongoose , {Schema} from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 100,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }

})

const User = mongoose.model('user', userSchema)

export default User;