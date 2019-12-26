class Movie{
    constructor(name, genre, releaseDate = '', IMDB = ''){
        if(!name || !genre){
            throw new Error('Must Inform name and Genre') 
        }
        this.name = name, 
        this.genre = genre, 
        this.releaseDate = releaseDate, 
        this.IMDB = IMDB 
    }
}