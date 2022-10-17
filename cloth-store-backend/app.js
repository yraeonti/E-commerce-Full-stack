require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cookieParser = require('cookie-parser')

const connectDB = require('./db/connect')
const authRouter = require('./routes/authRoutes')
const router = require('./routes/routes')
const notFoundMiddleware = require('./middleware/notFound')
const customErrorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())
// app.use(express.urlencoded, {extended: false})
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
    res.send('Home page')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1', router)


app.use(notFoundMiddleware)
app.use(customErrorHandler)

const PORT = 5000 || process.env.PORT




const connect = async () => {
  try {
    await connectDB(process.env.mydb)
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

connect()