
$('#add-movie-form').on("submit", function(e){
    // Hindra formuläret från att skicka iväg användaren.
    e.preventDefault();
    
    let title = $("#title-field").val();
    let rating = $("#rating-field").val();

    let condition1 = false;
    let condition2 = false;

    if (title !== "") {
        condition1 = true;
    } else {
        alert("Du behöver ange titel!");
    }

    if (rating === "0") {
        alert("Du behöver ange rating!");
    } else {
        condition2 = true;
    }

    if (condition1 && condition2) {
        // convert a string to a number
        let ratingNumber = parseInt(rating);

        // create and set data the a new li-element
        $("#movies").append(`
            <li data-grade="${ratingNumber}" data-title="Star Wars">
                ${title}
                <img src="images/delete.png" alt="Delete movie" class="delete-movie-icon">
                ${createStarImages(ratingNumber)} <!-- create x-number star images -->
            </li>
        `);

        // clear the form
        $('#add-movie-form').trigger("reset");

    } else {
        console.log("error");
    }
})

function createStarImages(numberOfStars) {
    let starsHtml = '';
    for (let i = 0; i < numberOfStars; i++) {
        starsHtml += $('<img>').attr('src', 'images/star.png').attr('alt', 'Star')[0].outerHTML;
    }
    return starsHtml;
}

$('#movies').on('click', '.delete-movie-icon', function() {
    $(this).parent().remove();
})