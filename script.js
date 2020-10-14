var date = document.querySelector("#currentDay");

date.textContent = moment().format("MMM Do YYYY");

moment().hour(Number);

var current = moment().hour(); // Number
console.log(current);

$(".form-row").each(function() {
var blockHour = parseInt($(this).find(".hour").attr("id"))

console.log($(this))
if(blockHour < current) {
$(this).parent().find(".form-row").addClass("past")

}
else if(blockHour === current) {
    $(this).removeClass("past")
    $(this).addClass("present")
}
else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}

});

$(document).ready(function() {
let buttonEl = document.querySelector(".btn");

$(buttonEl).on("click", function(event){
    event.preventDefault();
    var setText = document.querySelector("#inlineFormInputGroup").value;
    
    localStorage.setItem("setText", setText);

} )
});

