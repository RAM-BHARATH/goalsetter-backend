const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors')

connectDB();

const { errorHandler } = require('./middleware/errorMiddleware')

const goal_routes = require('./routes/goal_routes')
const user_routes = require('./routes/user_routes')

const app = express()



app.options('*',cors({
    origin: 'https://goalsetter-frontend.netlify.app'
}))

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// app.use('/api/*',cors({
//     origin: 'https://goalsetter-frontend.netlify.app',
//     optionsSuccessStatus: 204,
    
// }))


app.use('/api/goals', goal_routes);
app.use('/api/users', user_routes);

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))