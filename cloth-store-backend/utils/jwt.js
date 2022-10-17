const jwt = require('jsonwebtoken')

const createToken = ({payload}) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
    return token
}

const isValidToken = (token) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = (res, user) => {
    const jwtToken = createToken({payload: user})


    const oneDay = 1000 * 60 * 60 * 24

    res.cookie('Token', jwtToken, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    })
}

module.exports = {
    isValidToken,
    attachCookiesToResponse,
    createToken
}