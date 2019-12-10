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

//COLOR CHANGE -----------------------------------------------------------------

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
   
//COLOR CHANGE END -----------------------------------------------------------------

//LOCAL STORAGE SAVE -------------------------------------------------------------

// var saveButton1 = document.querySelector("#button-addon1");

// $("#button-addon1").on("click", function{

// })

document.getElementById("button-addon1").addEventListener("click", function(){
    var thingthing = document.getElementById("09AMInput").value;
    localStorage.setItem("Appointment09AM", thingthing);
    
    console.log(thingthing);
});



// var saveButton2 = document.querySelector("#button-addon2");
// var saveButton3 = document.querySelector("#button-addon3");
// var saveButton4 = document.querySelector("#button-addon4");
// var saveButton5 = document.querySelector("#button-addon5");
// var saveButton6 = document.querySelector("#button-addon6");
// var saveButton7 = document.querySelector("#button-addon7");
// var saveButton8 = document.querySelector("#button-addon8");
// var saveButton9 = document.querySelector("#button-addon9");

// var hour1Appointment=$("#09AMInput").find("input").value;
// console.log(hour1Appointment);
