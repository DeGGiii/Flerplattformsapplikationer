function printMovies(movies) {

    movies.forEach((movie) => {

        //li elementet -> Titeln på filmen -> antalet stjärnonr som ska läggas till -> delete knappen.
        $("#movie-list").append(` 
                <li data-grade="${movie.grade}" data-title="${movie.title}">
                ${movie.title}
                ${getStars(movie.grade)}
                <img src="images/delete.png" alt="Delete movie" class="delete-movie"> 
                </li>
                `);
    });

}

function loadMovies() {
    /*
        Todo: Filmerna ska snart laddas in från localStorage, men till
        en början nöjer vi oss med en vanlig array med filmer
    */
    const movies = JSON.parse(localStorage.getItem("movieList")) || [];

    return movies;
}

function getStars(rating) {
    /*
        Todo: Baserat på "rating" (en siffra) så returnerar denna
        funktion HTML-kod för antalet stjärnor (betyg) för en film.
    */

    let stars = "";
    for (let i = 0; i < rating; i++) { stars += '<img src="images/star.png" alt="Star">'; }
    return stars;
}

function saveMovies(movies) {
    /*
        Todo: Sparar filmerna till localStorage (JSON-format)
    */

    localStorage.setItem("movieList", JSON.stringify(movies));
}

$("#new-movie-form").on("submit", function (e) {
    /*
        Todo: När man klickar på knappen "Spara film" så ska funktionen:
        1. Validera att man skrivit in en titel & valt ett betyg. Om inte
        så ska vi visa upp (i en popup-ruta) ett meddelande om att både
        titel & betyg måste fyllas i.
        2. Lägga till en film i vår lista av filmer i localStorage
        3. Visa den nya filmen i vår lista av filmer
        4. Återställa formuläret (ingen titel, eller betyg valt)
    */

    e.preventDefault();

    // Hämta formulärdata
    var title = $("#title").val();
    var grade = $("#grade").val();

    // 1. Validera att både titel och betyg fyllts i
    if (title === "" || grade === "") {
        alert("Både titel och betyg måste fyllas i.");
    } else {

        // Skapa ett nytt filmobjekt
        const movie = {
            title: title,
            grade: grade
        };

        // Hämta befintlig filmlista från localStorage
        const movies = loadMovies();

        // 2. Lägg till den nya filmen till listan av filmer
        movies.push(movie);

        // Spara den uppdaterade filmlistan till localStorage
        localStorage.setItem("movieList", JSON.stringify(movies));

        $("#movie-list").html("");

        // 3. hämtar uppdaterad lista
        printMovies(movies);

        // 4. Återställ formuläret
        $("#new-movie-form").trigger("reset");
    }

});


$("#order-alphabetic").on("click", function () {
    /*
        Todo: Sortera filmlistan alfabetiskt stigande
    */
});

$("#order-grade").on("click", function () {
    /*
        Todo: Sortera filmlistan fallande efter betyg
    */
});

$("#movie-list").on("click", ".delete-movie", function () {
    /*
        Todo: Ska ta bort en film från:
        1. Filmlistan i localStorage
        2. Från filmlistan som visas på webbsidan
    */

    // Hämta befintlig filmlista från localStorage
    const movies = loadMovies();

    // 1. loopar igenom arrayen för att hitta den exakta filmen 
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === $(this).parent().attr("data-title")) {
            // Tar bort filmen genom att använda .splice vilket innebär att man tar bort i filmen som loopas med ett antal. 
            movies.splice(i, 1);
        }
    }

    // Spara den uppdaterade filmlistan till localStorage
    localStorage.setItem("movieList", JSON.stringify(movies));

    // 2. Tar bort filmen från hemsidan (HTML)
    $(this).parent().remove();
});

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
    const movies = loadMovies();
    printMovies(movies);
});