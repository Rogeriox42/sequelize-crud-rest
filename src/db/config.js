const Sequelize = require('sequelize') 
const dotenv = require('dotenv').config() 
const HOST = process.env.HOST || 'localhost' 
const USER = process.env.HOST || 'root'
const DIALECT = process.env.DIALECT || 'postgres'
const PWD = process.env.HOST ||  'pwd'
// const SERVER = process.env.HOST ||  'server' 
const DATABASE = process.env.HOST || 'db'

class DBConfig{
    constructor(){
        this.driver = null 
        this.movie = null 
        this.employee = null
        this.connect() 
        this.modelMovie()
    }

    connect(){
        this.connection = new Sequelize(DATABASE, USER, PWD, {
            host: HOST, 
            dialect: DIALECT, 
            quoteIdentifiers: false, 
            operatorAliases: false, 
            logging: false, 
        })
    }

    async modelMovie(){
        this.movie = connection.model('Movie', {
            id: {
                type: Sequelize.INTEGER, 
                required: true, 
            }, 
            name: {
                type: Sequelize.TEXT, 
                required: true
            }, 
            genre: {
                type: Sequelize.TEXT, 
                required: false
            }, 
            releaseDate: Sequelize.TEXT, 
            IMDB: Sequelize.FLOAT

        }, {
            tableName = 'TB_MOVIE', 
            freezeTableName = false, 
            timestamps: false
        })

        await this.movie.sync() 
    }
}

module.exports = DBConfig