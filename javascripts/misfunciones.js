/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* No tocar si no se entiende */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}