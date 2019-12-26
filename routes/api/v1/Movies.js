const express = require('express') 
const Movie = require('../../../src/model/Movie')

const router = express.Router() 

router.get('/', (req, res) =>{
    res.send({
        message: `You reached "/Movie`
    })
})

router.get('/:id', (req, res) =>{

})

router.put('/:id', (req, res) =>{

})

router.post('/:id', (req, res) =>{

})

module.exports = router 