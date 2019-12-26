const MovieDAO = require('../db/MovieDAO')
const assert = require('assert') 
const uuid = require('uuid/v1') 

const MOVIE_CREATE_MOCK = {     
    'name': 'The Matrix', 
    'genre': 'Action', 
    releaseDate: '31/03/1999', 
    IMDB: 7.8
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
        
    })

    it('Delete Movie', async function(){
        const res = await movieDAO.delete(9)
        assert.deepEqual(res, true) 
    })
})