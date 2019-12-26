const express = require('express') 
const dotenv = require('dotenv').config() 
const app = express() 
const PORT = process.env.PORT || 8040 
const movieRoutes = require('./routes/api/v1/Movies')

app.get('/', (req, res) =>{
    res.status(200).send({
        message: `Successfully reached the "/" endpoint.\n`
    })
})

app.use('/api/v1/movie', movieRoutes)

app.listen(PORT, () =>{
    console.log(`Application running on port: ${PORT}`) 
})