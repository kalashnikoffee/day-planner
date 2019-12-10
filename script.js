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

// function colorChange() {
//     var currentTime = new Date().getHours();
//     if (0 <= currentTime&&currentTime < 5) {
//      document.write("<link rel='stylesheet' href='night.css' type='text/css'>"); // basic idea but lets not make a second style sheet
//     }

function nineAMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 9){
        $("#09AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 9){
        $("#09AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#09AMInput").attr("style", "background-color: #6699ff");
    }
}
nineAMRowColorChage();

function tenAMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 10){
        $("#10AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 10){
        $("#10AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#10AMInput").attr("style", "background-color: #6699ff");
    }
}
tenAMRowColorChage();

function elvnAMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 11){
        $("#11AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 11){
        $("#11AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#11AMInput").attr("style", "background-color: #6699ff");
    }
}
elvnAMRowColorChage();

function twelvePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 12){
        $("#12PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 12){
        $("#12PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#12PMInput").attr("style", "background-color: #6699ff");
    }
}
twelvePMRowColorChage();

function onePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 13){
        $("#01PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 13){
        $("#01PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#01PMInput").attr("style", "background-color: #6699ff");
    }
}
onePMRowColorChage();

function twoPMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 14){
        $("#02PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 14){
        $("#02PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#02PMInput").attr("style", "background-color: #6699ff");
    }
}
twoPMRowColorChage();

function threePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 15){
        $("#03PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 15){
        $("#03PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#03PMInput").attr("style", "background-color: #6699ff");
    }
}
threePMRowColorChage();

function fourPMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 16){
        $("#04PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 16){
        $("#04PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#04PMInput").attr("style", "background-color: #6699ff");
    }
}
fourPMRowColorChage();

function fivePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (currentTime == 17){
        $("#05PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(currentTime > 17){
        $("#05PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#05PMInput").attr("style", "background-color: #6699ff");
    }
}
fivePMRowColorChage();
    // if (currentTime == 10){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 11){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 12){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 13){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime ==14){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 15){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 16){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }
    // if (currentTime == 17){
    //     document.getElementById(id).style.backgroundColor = "#ff0000";
    // }