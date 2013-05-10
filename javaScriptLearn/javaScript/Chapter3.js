window.onload = function () {
    getTodaysDate();
};

//3.1Print today's date
function getTodaysDate() {
    var dateElement = document.getElementById("date");
    var date = new Date();

    var result = "<p>" + dt + "</p>";
    insertResult(result);
}

function insertResult(result) {
    document.getElementById("result").innerHTML = "dd";
}