function loadDoc() {
    const xhttp = new XMLHttpRequest();
    // Dette er en callback function, dvs den bliver kaldt når billedet er hentet
    xhttp.onload = function () {
        var hundeListeObj = JSON.parse(this.responseText); // Vi får et JSON svar fra API'et, og konverterer det til et objekt med JSON.parse.
        document.getElementById("demo").innerHTML = hundeListeObj.toString();
        //const img = document.getElementById("billede");
       // img.src = hundeListeObj.message[0];
    };
    xhttp.open("GET", "http://ron-swanson-quotes.herokuapp.com/v2/quotes");
    xhttp.send();
}