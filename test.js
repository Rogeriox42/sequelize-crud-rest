const MovieDAO = require('./src/db/MovieDAO')

async function main() {
    const movieDAO = new MovieDAO()
    const list = await movieDAO.readAll()
    console.log('list', list)
}

main() 