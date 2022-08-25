//need to add current date
var currentDay = $('#currentDay').html('' + moment().format('dddd, MMMM Do'));

//clear local storage
$("#clearBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

//save local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".text").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

$("#hour9 .text").val(localStorage.getItem("09"));
$("#hour10 .text").val(localStorage.getItem("10"));
$("#hour11 .text").val(localStorage.getItem("11"));
$("#hour12 .text").val(localStorage.getItem("12"));
$("#hour13 .text").val(localStorage.getItem("13"));
$("#hour14 .text").val(localStorage.getItem("14"));
$("#hour15 .text").val(localStorage.getItem("15"));
$("#hour16 .text").val(localStorage.getItem("16"));
$("#hour17 .text").val(localStorage.getItem(""));


