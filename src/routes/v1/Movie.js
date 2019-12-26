const express = require('express') 
const MovieDAO = require('../../db/MovieDAO') 
movieDAO = new MovieDAO() 

const router = express.Router() 

router.get('/', async (req, res) =>{
    const list = await movieDAO.readAll()
    res.status(200).send({
        data: list 
    })
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const item = await movieDAO.read({id})
    res.status(200).send({
        data: item 
    })
})

router.put('/', (req, res) =>{
    
})

router.post('/', (req, res) =>{

})

router.delete('/', (req, res) =>{

})

module.exports = router 