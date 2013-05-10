//3.1Print today's date
function getTodaysDate() {
    //var dateElement = document.getElementById("date");
    var date = new Date();

    insertResult(date);
}

//3.2 Printing out th UTC Date and Time
function getUTCDateAndTime() {
    var today = new Date();

    var utcDate = today.toUTCString();
    var dateElement = "local datetime: " + today + " UTC datetime: " + utcDate;
    insertResult(dateElement);
}

//3.3 Printig out an ISO 8601 Formatted date
function getISO8601Date() {
    var date = new Date();
    var month = date.getUTCMonth();
    month++;

    var day = date.getUTCDate();
    if (day < 10) day = "0" + day;
    var year = date.getUTCFullYear();

    var hours = date.getUTCHours();
    if (hours < 10) hours = "0" + hours;

    var minutes = date.getUTCMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = date.getUTCSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    var newDate = year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "Z";
}

function insertResult(result) {
    document.getElementById("result").innerHTML += "<p>" + result; + "</p>";
}

window.onload = function onLoad() {
    getTodaysDate();
    getUTCDateAndTime();
}