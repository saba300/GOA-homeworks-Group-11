document.getElementById('searchBtn').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieTitle').value;
    
    if (movieTitle === '') {
        alert('Please enter a movie title');
        return;
    }

    const apiKey = 'YOUR_API_KEY';  // Replace with your OMDb API key
    const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Movie not found');
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "False") {
                throw new Error('Movie not found');
            }
            const movieInfo = document.getElementById('movie-info');
            movieInfo.innerHTML = `
                <h2>${data.Title} (${data.Year})</h2>
                <img src="${data.Poster}" alt="Poster" class="poster">
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
            `;
        })
        .catch(error => {
            const movieInfo = document.getElementById('movie-info');
            movieInfo.innerHTML = `<p class="error">${error.message}</p>`;
        });
});
