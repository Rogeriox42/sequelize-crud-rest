const Connection = require('../db/Connection') 
const assert = require('assert') 

describe('Connection', function(){
    
    it('Create Connection', async () =>{
        const res = await new Connection()._connect() 
        assert.deepEqual(res, true) 
    })

    it('Check Connection', async () =>{
        const connection = new Connection() 
        const result = connection.isConnected()
        assert.deepEqual(result, true) 
    })

})