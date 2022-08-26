//need to add current date
//var currentDay = $('#currentDay').html('' + moment().format('dddd, MMMM Do'));
let currentHour = moment().format("HH");

$(document).ready(function () {
  let timeNow = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = timeNow;
});

//clear local storage
$("#clearBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});

// Gets the `id` from the `.time-div` element
  // finds each time divs element and gets the text from the matching key 

$(".time-div").each(function () {
  var timeDiv = $(this).attr("id").split("-")[1];
  
  if (currentHour == timeDiv) {
    $(this).addClass("present");
    $(this).children(".text").addClass("white-text");
  } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});


//save local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-text").val();
  var time = $(this).parent().attr("id").split("-")[0];
  localStorage.setItem(time, value);
});


//console.log(time);

$("#hour09 .time-text").val(localStorage.getItem("hour09"));
$("#hour10 .time-text").val(localStorage.getItem("hour10"));
$("#hour11 .time-text").val(localStorage.getItem("hour11"));
$("#hour12 .time-text").val(localStorage.getItem("hour12"));
$("#hour13 .time-text").val(localStorage.getItem("hour13"));
$("#hour14 .time-text").val(localStorage.getItem("hour14"));
$("#hour15 .time-text").val(localStorage.getItem("hour15"));
$("#hour16 .time-text").val(localStorage.getItem("hour16"));
$("#hour17 .time-text").val(localStorage.getItem("hour17"));


