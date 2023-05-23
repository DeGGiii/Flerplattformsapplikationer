$(document).ready(function () {
  // Event listener för input ändringar
  $("#search-field").on("keyup", function () {
    // Hämtar search query från input
    const searchQuery = $(this).val();

    // reset search results when text field is empty
    if (searchQuery.length === 0) {
      $("#movie-list").empty();
    }

    if (searchQuery.length > 2) {
      // rensar existerade resultat
      $("#movie-list").empty();

      // AJAX förfrågan till API
      $.ajax({
        url: `http://www.omdbapi.com/?apikey=1271a29d&s=${searchQuery}`,
        dataType: "JSON",
        success: function (response) {
          // Kollar om API returernar någon resultat
          if (response.Response === "True") {
            // Loopar igenom resultaten och lägger ut alla items i en lista
            $.each(response.Search, function (index, movie) {
              const movieTitle = movie.Title;
              const movieYear = movie.Year;
              const moviePoster = movie.Poster;
              const listItem = `<li id="movie-list">
                                    <img src="${moviePoster}" alt="${movieTitle} poster">
                                    <span id="movie-title">${movieTitle}</span>
                                    <span id="movie-year">${movieYear}</span>
                                  </li>`;
              $("#movie-list").append(listItem);
            });
          } 
        },
      });
    } 
  });
});
