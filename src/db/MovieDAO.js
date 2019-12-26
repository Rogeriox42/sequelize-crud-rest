const Sequelize = require('sequelize')
const Connection = require('./Connection')
const uuid = require('uuid/v1')

class MovieDAO {
    constructor() {
        this.driver = new Connection().connection
        this.db = null
        this._modelMovie()
    }

    async createMovie(item) {
        try {
            const { dataValues } = await this.db.create(item)
            return true
        }catch(Error){
            console.log('Error', Error)
        }
    }

    async delete(id){
        const res = await this.db.destroy({where: {id: id}})
        return res 
    }

    async read(query){
        const [dataValues] = await this.db.findAll({query, raw: true})
        return dataValues
    }

    async _modelMovie() {
        this.db = this.driver.define('Movie',
            {
                id: {
                    type: Sequelize.INTEGER,
                    required: true,
                    autoIncrement: true,
                    primaryKey: true,

                },
                name: {
                    type: Sequelize.TEXT,
                    required: true
                },
                genre: {
                    type: Sequelize.TEXT,
                    required: true
                },
                release_date: {
                    type: Sequelize.TEXT,
                    required: true
                },
                imdb: {
                    type: Sequelize.FLOAT,
                    required: true
                }
            },
            {
                tableName: 'TB_MOVIE',
                freezeTableName: false,
                timestamps: false
            }
        )

        await this.db.sync()
        return true
    }
}

module.exports = MovieDAO