const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'files')));

app.get('/movies', function (req, res) {
    const movies = [
        {
            Title: "The Thing",
            Released: "1982-06-25",
            Runtime: 109,
            Genres: ["Horror", "Mystery", "Sci-Fi"],
            Directors: ["John Carpenter"],
            Writers: ["Bill Lancaster", "John W. Campbell Jr."],
            Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
            Plot: "A research team in Antarctica is hunted by a shape-shifting alien.",
            Poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            Metascore: 57,
            imdbRating: 8.2
        },
        {
            Title: "The Matrix",
            Released: "1999-03-31",
            Runtime: 136,
            Genres: ["Action", "Sci-Fi"],
            Directors: ["Lana Wachowski", "Lilly Wachowski"],
            Writers: ["Lana Wachowski", "Lilly Wachowski"],
            Actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            Plot: "A hacker discovers the world is a simulated reality and joins a rebellion against its controllers.",
            Poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Matrix_soundtrack_cover.jpg",
            Metascore: 73,
            imdbRating: 8.7
        },
        {
            Title: "The Dark Knight",
            Released: "2008-07-18",
            Runtime: 152,
            Genres: ["Action", "Crime", "Drama"],
            Directors: ["Christopher Nolan"],
            Writers: ["Jonathan Nolan", "Christopher Nolan"],
            Actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            Plot: "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            Metascore: 84,
            imdbRating: 9.0
        }
    ];

    console.log("MOVIES ENDPOINT HIT"); // <-- IMPORTANT TEST
    res.json(movies);
})

app.listen(3000)
console.log("Server now listening on http://localhost:3000/")