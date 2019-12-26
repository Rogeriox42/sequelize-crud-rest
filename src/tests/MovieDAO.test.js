const MovieDAO = require('../db/MovieDAO')
const assert = require('assert') 
const uuid = require('uuid/v1') 

const MOVIE_CREATE_MOCK = {     
    'name': 'The Matrix', 
    'genre': 'Action', 
    release_date: '31/03/1999', 
    imdb: 7.8
}

describe('MovieDAO Tests', async function(){
    movieDAO = new MovieDAO() 
    
    it('Model Database', async ()=>{
        const result = await movieDAO._modelMovie()
        assert.deepEqual(result, true)
    })

    it('Create Movie', async function(){
        const res =  await movieDAO.createMovie(MOVIE_CREATE_MOCK)
        console.log('res', res)
        assert.deepEqual(res, true)
    })

    it('Read Movie', async function(){
        const res = await movieDAO.read({name: MOVIE_CREATE_MOCK.name})
        delete res.id, 
        assert.deepEqual(res, MOVIE_CREATE_MOCK) 
    })

    it('Delete Movie', async function(){
        const item = await movieDAO.read({})
        const res = await movieDAO.delete({id: item.id})
        assert.deepEqual(res, true) 
    })
})