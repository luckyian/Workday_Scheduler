var date = document.querySelector("#currentDay");

date.textContent = moment().format("MMM Do YYYY");

moment().hour(Number);

$(document).ready(function() {
let buttonEl = document.querySelector(".btn");

$(buttonEl).on("click", function(event){
    event.preventDefault();
    var setText = document.querySelector("#inlineFormInputGroup").value;
    
    localStorage.setItem("setText", setText);

} )
});

