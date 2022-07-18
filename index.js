
var numberOfButton = document.querySelectorAll(".btnNo");

 for (var i = 0; i < numberOfButton.length; i++) {
numberOfButton[i].addEventListener("click", function() {
  var numberSelected = document.querySelector(".number-Selected");
  numberSelected.innerHTML = this.innerHTML;

});
}

document.querySelector(".btn2").addEventListener("click", function() {

    document.querySelector(".cardA").classList.add("hidden")
    document.querySelector(".cardB").classList.remove("hidden")


});
