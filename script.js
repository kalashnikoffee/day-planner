//Something that will update the style in real time to highlight the appropriate row each hour. 
//Take input on each row that will will either print or be visible to console.log
//Save button on each Row to add to local storage and reapply on a refresh
//display date and time at top of page
//each row has 3 potential colors = past, present, future

//CLOCK----------------------------------

function updateClock ( ) {
    var currentTime = new Date ( );

var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

document.getElementById("clock").firstChild.nodeValue = currentTimeString;
};

