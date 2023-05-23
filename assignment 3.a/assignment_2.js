// När formuläret skickas (dvs. när användaren klickar på submit-knappen).
$("#newsletter-form").on("submit", function (e) {
    // Hindra formuläret från att skicka iväg användaren.
    e.preventDefault();

    // Här placerar ni er validerings kod.
    let name = $("#name-field").val();
    let age = $("#age-field").val();
    let email = $("#email-field").val();

    if (name == "") {
        $("#name-field").css("background-color", "red");
    } else {
        $("#name-field").css("background-color", "white");
    }

    if (age == "") {
        $("#age-field").css("background-color", "red");
    } else {
        $("#age-field").css("background-color", "white");
    }

    if (email == "") {
        $("#email-field").css("background-color", "red");
    } else {
        $("#email-field").css("background-color", "white");
    }

    if (name && age && email) //Checks if all boxes have an input
    {
        $("#name-field").val("");
        $("#age-field").val("");
        $("#email-field").val("");
        // Om allting var korrekt - skicka vidare användaren.
        $("#newsletter-form")[0].submit();
    }
});