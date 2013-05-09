//2.7 trim strings
function trimWhiteSpace() {
    var testString = "    this is the string    ";

    //trim white space from the begining, deleting one or more saces from begining of string
    testString = testString.replace(/^\s+/, "");

    //trim white space from the end
    testString = testString.replace(/\s+$/, "");

    var testString = "    this is the string     ";

    testString = testString.trim();

    document.getElementById("result").innerHTML = testString;
}

//2.8 Replace HTML tags with Named Entities
function replaceHtmlTags() {
    var pieceOdHtml = "<p>This is a <span>paragraph</span></p>";

    pieceOdHtml = pieceOdHtml.replace(/</g, "&lt;");
    pieceOdHtml - pieceOdHtml.replace(/>/g, "&gt;");

    document.getElementById("result").innerHTML = pieceOdHtml;
}

window.onload = function onLoad() {
    trimWhiteSpace();
    replaceHtmlTags();
}