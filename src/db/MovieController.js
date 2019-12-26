const Sequelize = require('sequelize') 

class MovieDAO{
    constructor(){
        this.driver = null 
        this.modelMovie()
    }
    
    async modelMovie(){
        this.driver = connection.model('Movie', {
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

module.exports = MovieDAO