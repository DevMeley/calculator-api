const express = require('express')
const PORT = 1000
const router = require('./routes/calculator.js')


const app = express()

app.use(express.json())
app.use('calculator', router)


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})