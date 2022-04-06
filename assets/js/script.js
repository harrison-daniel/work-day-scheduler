var tasks = [];

// target editable task field
var textBlock = $(".description");

// add variable to set todays date at top of page
var time = moment().format("[Today's date is] dddd, MMMM Do")

// get current hour
var currentHour = moment().hour()

// display time to top of page
var timeDisplay = $("#currentDay");
timeDisplay.text(time);

// create timeblock variable to reference when checking
var timeBlock = $(".hour")
console.log(timeBlock);

// check time against past, present, futuer
var dateCheck = function () {
    for (var i = 0; i < timeBlock.length; i++) {
        var hour = parseInt($(timeBlock[i]).attr("id"));
        console.log(hour)

        if (hour < currentHour) {
            $(textBlock[i]).addClass("past");
        } else if (hour == currentHour) {
            $(textBlock[i]).addClass("present");
        } else {
            $(textBlock[i]).addClass("future");
        }
    }
};


// load saved text into container referencing specific time upon page load
// WHen Save button is clicked, grab text from text container -- save to local storage (in specific time)
var loadTasks = function () {
    var loadText = localStorage.getItem("9");
    var nineBlock = $("#hour9").val(loadText);
    var loadText = localStorage.getItem("10");
    var tenBlock = $("#hour10").val(loadText);
    var loadText = localStorage.getItem("11");
    var elevenBlock = $("#hour11").val(loadText);
    var loadText = localStorage.getItem("12");
    var twelveBlock = $("#hour12").val(loadText);
    var loadText = localStorage.getItem("13");
    var thirteenBlock = $("#hour13").val(loadText);
    var loadText = localStorage.getItem("14");
    var fourteenBlock = $("#hour14").val(loadText);
    var loadText = localStorage.getItem("15");
    var fifteenBlock = $("#hour15").val(loadText);
    var loadText = localStorage.getItem("16");
    var sixteenBlock = $("#hour16").val(loadText);
    var loadText = localStorage.getItem("17");
    var seventeenBlock = $("#hour17").val(loadText);
};


// add eventlistener to Save button
$(".saveBtn").on("click", function() {
    var hourBlock = $(this).siblings(".hour")[0].id;
    console.log(hourBlock);
    var savedTextBlock = $(this).siblings("textarea").val();
    console.log(savedTextBlock);
    localStorage.setItem(hourBlock, savedTextBlock);
});


loadTasks();
dateCheck();