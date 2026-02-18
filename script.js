
const movies = [
    {
        title: "Bahubali",
        year: "2015",
        genre: "Action",
        rating: "8.0",
        plot: "A warrior learns about his royal heritage and fights for his kingdom.",
        poster: "https://m.media-amazon.com/images/I/81V+8d5pYVL._AC_SL1500_.jpg",
        url: "https://www.imdb.com/title/tt2631186/"
    },
    {
        title: "Mr Perfect",
        year: "2011",
        genre: "Romance",
        rating: "7.0",
        plot: "A man who believes in perfection learns the value of relationships.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA1NjkzNzM3Ml5BMl5BanBnXkFtZTgwOTUzMjg2MDE@._V1_.jpg",
        url: "https://www.imdb.com/title/tt1816441/"
    },
    {
        title: "Darling",
        year: "2010",
        genre: "Romance",
        rating: "7.3",
        plot: "A man pretends to love a gangster's daughter but falls for another girl.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQyNTQ5ODU1Nl5BMl5BanBnXkFtZTgwMDU3NjE0MDE@._V1_.jpg",
        url: "https://www.imdb.com/title/tt1609168/"
    },
    {
        title: "Mirchi",
        year: "2013",
        genre: "Action",
        rating: "7.8",
        plot: "A man tries to unite two rival families through love.",
        poster: "https://m.media-amazon.com/images/M/MV5BNmQ5ODc1NmUtN2FjMi00YzNlLTk0OTctNmJjYTIyYzBiMDE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",
        url: "https://www.imdb.com/title/tt2550986/"
    },
    {
        title: "Kalki",
        year: "2024",
        genre: "Sci-Fi",
        rating: "8.5",
        plot: "A futuristic warrior destined to save humanity.",
        poster: "https://m.media-amazon.com/images/M/MV5BNjZiM2YxZmQtODFkZS00ZDE3LWJlZjAtYzU2NmZkN2Y3MDA3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        url: "https://www.imdb.com/title/tt12735488/"
    },
    {
        title: "Salaar",
        year: "2023",
        genre: "Action",
        rating: "7.5",
        plot: "Two friends become enemies in a violent world.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDY1ZjY5ZDUtZmYzZi00OTI1LWJhZTYtNTE0M2FjNTYxMjY2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        url: "https://www.imdb.com/title/tt13927994/"
    },
    {
        title: "Anand",
        year: "2004",
        genre: "Drama",
        rating: "8.1",
        plot: "A feel-good romantic drama about friendship and love.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY5MTI2MjQ2NV5BMl5BanBnXkFtZTgwNTY5MjI2MDE@._V1_.jpg",
        url: "https://www.imdb.com/title/tt0420332/"
    },
    {
        title: "Hi Nanna",
        year: "2023",
        genre: "Romance",
        rating: "8.2",
        plot: "A father and daughter journey through love and memories.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDY4NTA0NjUtODc1My00ZTM3LWJmYjctNGZmNzlmNzQyNDMxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        url: "https://www.imdb.com/title/tt29268110/"
    }
];

function displayMovies(list) {
    const resultDiv = document.getElementById("movieResult");
    resultDiv.innerHTML = "";

    list.forEach(movie => {
        resultDiv.innerHTML += `
            <div class="movie-card">
                <img src="${movie.poster}">
                <h2>${movie.title}</h2>
                <p><b>Year:</b> ${movie.year}</p>
                <p><b>Genre:</b> ${movie.genre}</p>
                <p><b>Rating:</b> ${movie.rating}</p>
                <p>${movie.plot}</p>
                <a href="${movie.url}" target="_blank">
                    <button style="margin-top:10px;padding:8px 12px;cursor:pointer;">
                        View Movie
                    </button>
                </a>
            </div>
        `;
    });
}

function searchMovie() {
    const input = document
        .getElementById("movieInput")
        .value
        .trim()
        .toLowerCase();

    if (input === "") {
        document.getElementById("movieResult").innerHTML =
            "<p>Please enter a movie name.</p>";
        return;
    }

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(input)
    );

    if (filtered.length > 0) {
        displayMovies(filtered);
    } else {
        document.getElementById("movieResult").innerHTML =
            "<p>Movie not found.</p>";
    }
}
