// Vi kommer fylla på denna i steg 2.
let options = {
    // Försök tvinga enheten till en så precis position som möjligt
    enableHighAccuracy: true,
    // Maximal tid i millisekunder som enheten har på sig att ge oss en position
    timeout: 5000,
    // Hur länge vår position får tillfälligt lagras (millisekunder)
    maximumAge: 0
};

function success(position) {
    // Ta en titt i er webbkonsol och se vad den innehåller.
    console.log("This is our position: ", position);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    const altitude = position.coords.altitude;
    const precisionAltitude = position.coords.precisionAltitude;
    const speed = position.coords.speed;

    document.getElementById("longitude").textContent = longitude;
    document.getElementById("latitude").textContent = latitude;
    document.getElementById("accuracy").textContent = accuracy;
    document.getElementById("altitude").textContent = altitude;
    document.getElementById("accuracy-altitude").textContent = precisionAltitude;
    document.getElementById("speed").textContent = speed;

}

function error(err) {
    console.warn("Something went wrong: ", err.message);
}

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas när en position försöker fastställas.
let watchID = navigator.geolocation.watchPosition(success, error, options);

// Skulle vi sedan vilja avbryta detta hade vi anropat `clearWatch`
navigator.geolocation.clearWatch(watchID);

navigator.geolocation.getCurrentPosition(success, error, options);


const speedInKmh = speed * 3.6;
document.getElementById("current-speed").textContent = `${speedInKmh} km/h`;

if (speedInKmh < 5) {
    document.getElementById("current-speed").style.backgroundColor = "red";
} else if (speedInKmh < 10) {
    document.getElementById("current-speed").style.backgroundColor = "yellow";
} else {
    document.getElementById("current-speed").style.backgroundColor = "green";
}