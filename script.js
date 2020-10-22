$(document).ready(function () {
let date = document.querySelector("#currentDay");

date.textContent = moment().format("MMM Do YYYY");

moment().hour(Number);

let current = moment().hour();
console.log(current);

$(".time-block").each(function () {
    let blockHour = parseInt($(this).parents('.row').find('.hour').attr("id"));

    $(this).parents(".row").find(".time-block").val(localStorage.getItem(blockHour));
    if (blockHour < current) {
        $(this).parents(".row").find(".time-block").addClass("past")

    }
    else if (blockHour === current) {
        $(this).removeClass("past")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }

});


    let buttonEl = document.querySelector(".btn");

   

    $(".btn").on("click", function (event) {
        
        event.preventDefault();
        
        var time = $(this).attr("id");
        console.log(time);
        let setText = $(this).parents('.row').find('.time-block').val();
        console.log(setText);
        localStorage.setItem(time, setText);
        

    })
});

