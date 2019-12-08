//Something that will update the style in real time to highlight the appropriate row each hour. 
//Take input on each row that will will either print or be visible to console.log
//Save button on each Row to add to local storage and reapply on a refresh
//display date and time at top of page
//each row has 3 potential colors = past, present, future


//DATE & TIME----------------------------------
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

function updateDate () {
    var d = new Date();
    var monthOfYear = d.getMonth ();
    var dayOfMonth = d.getDate ();
    var yearOfOurLord = d.getFullYear();
    var todaysDate = dayOfMonth + "/" + monthOfYear + "/" + yearOfOurLord;
    document.getElementById("date").firstChild.nodeValue = todaysDate;
}; 

updateDate();
updateClock(); setInterval('updateClock()', 1000 );

//
//if time < 9, then style
//else if time =9, style
//else style

function colorChange() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 5) {
     document.write("<link rel='stylesheet' href='night.css' type='text/css'>"); // basic idea but lets not make a second style sheet
    }

