// Book Title Name Input

function bookOneTitleFunction() {
  var x = document.getElementById("bookOneTitleTextInput").value;
  document.getElementById("bookOneTitleTextDisplay").innerHTML = x;
  document.getElementById("bookOneTitleTextInput").value = "";
}
function bookOneAuthorFunction() {
  var y = document.getElementById("bookOneAuthorTextInput").value;
  document.getElementById("bookOneAuthorTextDisplay").innerHTML = y;
  document.getElementById("bookOneAuthorTextInput").value = "";
}
function bookTwoTitleFunction() {
  var z = document.getElementById("bookTwoTitleTextInput").value;
  document.getElementById("bookTwoTitleTextDisplay").innerHTML = z;
  document.getElementById("bookTwoTitleTextInput").value = "";
}

function bookTwoAuthorFunction() {
  var a = document.getElementById("bookTwoAuthorTextInput").value;
  document.getElementById("bookTwoAuthorTextDisplay").innerHTML = a;
  document.getElementById("bookTwoAuthorTextInput").value = "";
}

function bookThreeTitleFunction() {
  var b = document.getElementById("bookThreeTitleTextInput").value;
  document.getElementById("bookThreeTitleTextDisplay").innerHTML = b;
  document.getElementById("bookThreeTitleTextInput").value = "";
}

function bookThreeAuthorFunction() {
  var c = document.getElementById("bookThreeAuthorTextInput").value;
  document.getElementById("bookThreeAuthorTextDisplay").innerHTML = c;
  document.getElementById("bookThreeAuthorTextInput").value = "";
}
/* Questions:
  - Why did I have to change the variable names to get this to run? When I had all vars as "x", it seems like the variable namespace was polluted? Doesn't each function have a separate scope?
  - How can I refactor these functions to make them more DRY?
*/
