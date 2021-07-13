// Loads HTML and CSS
$(document).ready(function () {
   
   
    // assigns eventlistener for save button
    $(".saveBtn").on("click", function () {
        console.log(this);
        // takes from sibling html textDescription 
        var text = $(this).siblings(".textDescription").val(); 
        // takes from parent id attribute
        var time = $(this).parent().attr("id");
        //stores items in localStorage
        localStorage.setItem(time, text);
    });

    // values for saved data stored in localstorage
    $("#time8 .textDescription").val(localStorage.getItem("time8"));
    $("#time9 .textDescription").val(localStorage.getItem("time9"));
    $("#time10 .textDescription").val(localStorage.getItem("time10"));
    $("#time11 .textDescription").val(localStorage.getItem("time11"));
    $("#time12 .textDescription").val(localStorage.getItem("time12"));
    $("#time13 .textDescription").val(localStorage.getItem("time13"));
    $("#time14 .textDescription").val(localStorage.getItem("time14"));
    $("#time15 .textDescription").val(localStorage.getItem("time15"));
    $("#time16 .textDescription").val(localStorage.getItem("time16"));
    $("#time17 .textDescription").val(localStorage.getItem("time17"));

    //Displays date in the format specified
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
        
})