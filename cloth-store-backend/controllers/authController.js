
const UserModel = require('../models/User')
const {BadRquestError, NotFoundError, UnauthenticatedError} = require('../errors')
const {StatusCodes} = require('http-status-codes')
const {attachCookiesToResponse} = require('../utils/jwt')
const {createToken} = require('../utils/jwt')


const registerUser = async (req, res) => {
   const {firstName, lastName, email, password} = req.body

   const isEmailUnique = await UserModel.findOne({email})
   if(isEmailUnique) {
    throw new BadRquestError('Email already exists')
   }
   

   const isFirstAccount = (await UserModel.countDocuments({})) === 0
   const role = isFirstAccount ? 'admin' : 'user'

   const user = await UserModel.create({firstName, lastName, email, password, role})

   const tokenUser = {
         firstName: user.firstName,
         lastName: user.lastName,
         role: user.role,
         email: user.email
   }

   attachCookiesToResponse(res, tokenUser)

   res.status(StatusCodes.OK).json({user: tokenUser})
}

const loginUser = async(req, res) => {
    const {email, password} = req.body
   
    if(!email || !password) {
        throw new BadRquestError('Please provide email and password')
    }
   
    const user = await UserModel.findOne({email})
    if(!user) {
        throw new NotFoundError('User not found')
    }
    
    const isPasswordCorrect = await user.comparePassword(password)
    // console.log(isPasswordCorrect);

    if(!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid password')
    }

    const tokenUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        email: user.email
  }
    
  attachCookiesToResponse(res, tokenUser)

  res.status(StatusCodes.OK).json({user: tokenUser})
}




module.exports = {
    registerUser,
    loginUser
}
