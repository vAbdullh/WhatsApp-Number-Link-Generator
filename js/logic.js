document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", function () {
    var number = document.getElementById("input").value;
    var link = "https://wa.me/" + number;
    window.location.href = link;
  }); 

});
