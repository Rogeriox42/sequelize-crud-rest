const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const HOST = process.env.HOST || 'localhost'
const USER = process.env.USER || 'root'
const DIALECT = process.env.DIALECT || 'postgres'
const PWD = process.env.PASSWORD || 'pwd'
const DATABASE = process.env.DATABASE || 'db'
const DBPORT = process.env.DBPORT || 5530

class Connection {
    constructor() {
        this.connection = null
        this._connect()
    }

    async _connect() {
        try {
            this.connection = new Sequelize(DATABASE, USER, PWD,  {
                host: HOST, 
                port: DBPORT, 
                // host: `${HOST}:${DBPORT}`, 
                dialect: DIALECT,
                quoteIdentifiers: false,
                operatorAliases: false,
                logging: false,
            })
            return true; 
        } catch (error) {
            console.log('error', error)
            return false; 
        }
    }

    isConnected() {
        try {
            this.connection.authenticate()
            return true;
        } catch (Error) {
            console.log('Error', Error)
            return false;
        }
    }
}

module.exports = Connection 