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
    if (momentTime.format("HH") == 9){
        $("#09AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 9){
        $("#09AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#09AMInput").attr("style", "background-color: #6699ff");
    }
}
nineAMRowColorChage();

function tenAMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 10){
        $("#10AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 10){
        $("#10AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#10AMInput").attr("style", "background-color: #6699ff");
    }
}
tenAMRowColorChage();

function elvnAMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 11){
        $("#11AMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 11){
        $("#11AMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#11AMInput").attr("style", "background-color: #6699ff");
    }
}
elvnAMRowColorChage();

function twelvePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 12){
        $("#12PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 12){
        $("#12PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#12PMInput").attr("style", "background-color: #6699ff");
    }
}
twelvePMRowColorChage();

function onePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 13){
        $("#01PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 13){
        $("#01PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#01PMInput").attr("style", "background-color: #6699ff");
    }
}
onePMRowColorChage();

function twoPMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 14){
        $("#02PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 14){
        $("#02PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#02PMInput").attr("style", "background-color: #6699ff");
    }
}
twoPMRowColorChage();

function threePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 15){
        $("#03PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 15){
        $("#03PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#03PMInput").attr("style", "background-color: #6699ff");
    }
}
threePMRowColorChage();

function fourPMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 16){
        $("#04PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 16){
        $("#04PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#04PMInput").attr("style", "background-color: #6699ff");
    }
}
fourPMRowColorChage();

function fivePMRowColorChage() {
    var currentTime = new Date().getHours();
    if (momentTime.format("HH") == 17){
        $("#05PMInput").attr("style", "background-color: #c6ffb3");
    }
    else if(momentTime.format("HH") > 17){
        $("#05PMInput").attr("style", "background-color: #d0d0e1");
    }
    else{
        $("#05PMInput").attr("style", "background-color: #6699ff");
    }
}
fivePMRowColorChage();
   
//COLOR CHANGE END -----------------------------------------------------------------

//LOCAL STORAGE SAVE -------------------------------------------------------------
document.getElementById("button-addon1").addEventListener("click", function(){
    var thingthing = document.getElementById("09AMInput").value;
    localStorage.setItem("Appointment09AM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon2").addEventListener("click", function(){
    var thingthing = document.getElementById("10AMInput").value;
    localStorage.setItem("Appointment10AM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon3").addEventListener("click", function(){
    var thingthing = document.getElementById("11AMInput").value;
    localStorage.setItem("Appointment11AM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon4").addEventListener("click", function(){
    var thingthing = document.getElementById("12PMInput").value;
    localStorage.setItem("Appointment12PM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon5").addEventListener("click", function(){
    var thingthing = document.getElementById("01PMInput").value;
    localStorage.setItem("Appointment01PM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon6").addEventListener("click", function(){
    var thingthing = document.getElementById("02PMInput").value;
    localStorage.setItem("Appointment02PM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon7").addEventListener("click", function(){
    var thingthing = document.getElementById("03PMInput").value;
    localStorage.setItem("Appointment03PM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon8").addEventListener("click", function(){
    var thingthing = document.getElementById("04PMInput").value;
    localStorage.setItem("Appointment04PM", thingthing);

    console.log(thingthing);
});
document.getElementById("button-addon9").addEventListener("click", function(){
    var thingthing = document.getElementById("05PMInput").value;
    localStorage.setItem("Appointment05PM", thingthing);

    console.log(thingthing);
});

function loadSaved1() {
    var x = localStorage.getItem("Appointment09AM");
    document.getElementById("09AMInput").value = x;
  };
  function loadSaved2() {
    var x = localStorage.getItem("Appointment10AM");
    document.getElementById("10AMInput").value = x;
  };
  function loadSaved3() {
    var x = localStorage.getItem("Appointment11AM");
    document.getElementById("11AMInput").value = x;
  };
  function loadSaved4() {
    var x = localStorage.getItem("Appointment12PM");
    document.getElementById("12PMInput").value = x;
  };
  function loadSaved5() {
    var x = localStorage.getItem("Appointment01PM");
    document.getElementById("01PMInput").value = x;
  };
  function loadSaved6() {
    var x = localStorage.getItem("Appointment02PM");
    document.getElementById("02PMInput").value = x;
  };
  function loadSaved7() {
    var x = localStorage.getItem("Appointment03PM");
    document.getElementById("03PMInput").value = x;
  };
  function loadSaved8() {
    var x = localStorage.getItem("Appointment04PM");
    document.getElementById("04PMInput").value = x;
  };
  function loadSaved9() {
    var x = localStorage.getItem("Appointment05PM");
    document.getElementById("05PMInput").value = x;
  };
//LOCAL STORAGE SAVE END ------------------------------------------------------

//Misc style changes--------------------------------------------
$(".topTitle").attr("style", "text-align: center");
$(".topClock").attr("style", "text-align: center");
$(".topDate").attr("style", "text-align: center");
// $(".titleBox").attr("style", "margin: 0 auto");
$("body").attr("style", 'background-image: url(assets/images/spikes.png); font-family: "Alatsi", sans-serif;'); //help
// $("body").attr("style", "font-family: 'Alatsi', sans-serif;");