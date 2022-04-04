var tasks;

// target editable task field
var textBlock = $(".description");

// get current hour
var currentHour = moment().hour()

// add cariable to set todays date at top of page
var time = moment().format("[Today's date is] dddd, MMMM Do")

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
}

dateCheck();

// add eventlistener to Save button

// WHen Save button is clicked, grab text from text container -- save to local storage (in specific time)

// load saved text into container referencing specific time upon page load




