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
    this.beforeAll(async function(){
        // await movieDAO.createMovie(MOVIE_CREATE_MOCK)
    })
    
    movieDAO = new MovieDAO() 
    
    it('Model Database', async ()=>{
        const result = await movieDAO._modelMovie()
        assert.deepEqual(result, true)
    })

    it('Create Movie', async function(){
        const res =  await movieDAO.create(MOVIE_CREATE_MOCK)
        console.log('res', res)
        assert.deepEqual(res, true)
    })

    it('Read Movie', async function(){
        const res = await movieDAO.read({name: MOVIE_CREATE_MOCK.name})
        delete res.id, 
        assert.deepEqual(res, MOVIE_CREATE_MOCK) 
    })

    it('Update Movie', async function(){
        const item = await movieDAO.read({name: MOVIE_CREATE_MOCK.name})
        console.log('item', item)
        const newData = {
            ... MOVIE_CREATE_MOCK, 
            name: 'Animatrix', 
            genre: 'Adventure / Animation / Fiction', 
            // releaseDate: '03/06/2003'
        }

        const res = await movieDAO.update(item.id, newData)
        
        assert.deepEqual(res, true)
    })

    it('Delete Movie', async function(){
        const item = await movieDAO.read({})
        const res = await movieDAO.delete({id: item.id})
        assert.deepEqual(res, true) 
    })
})