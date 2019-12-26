const Connection = require('./src/db/Connection')

const result = Connection.isConnected() 
if(result){
    console.log('Connected successfully!') 
}

