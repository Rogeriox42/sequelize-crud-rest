const express = require('express') 
const dotenv = require('dotenv').config() 
const app = express() 
const PORT = process.env.PORT || 8040 

app.get('/', (req, res) =>{
    res.status(200).send({
        message: `Successfully reached the "/" endpoint.\n`
    })
})

app.listen(PORT, () =>{
    console.log(`Application running on port: ${PORT}`) 
})