const mongoose = require('mongoose')
const validator = require('email-validator')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
     firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minlength: 3,
        maxlength: 50,
     },

     lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minlength: 3,
        maxlength: 50,
     },

     email: {
        type: String,
        unique: true,
        required: [true, 'Please provide valid mail address'],
        validate: {
            validator: function(email) {
                return validator.validate(email)
            },
            message: 'Please provide valid email address'
        }
     },

     password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
     },

     role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user']
     }
}, {timestamps: true})

UserSchema.pre('save', async function() {
   if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function(password) {
    const isPasswordCorrect = await bcrypt.compare(password, this.password)
    return isPasswordCorrect
}

module.exports = mongoose.model('User', UserSchema)