// Loads HTML and CSS for jquery
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

        //Notification that item was saved to localstorage by adding class to end
        $('.notification').addClass('working');
        setTimeout (function () {
            $('.notification').removeClass('working');
          }, 9000);
        
          // Display text when item is clicked
          $(".saveBtn").animate({
            width: '300px',
          }, 1000);
          $(".notification").show().animate({opacity: '1'}, 3000);

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

    //Function that checks time and adapts to css file
    function hourChecker() {
        //stores current number of hours
        var currentTime = moment().hour();
        //loops each time block
        $(".timeblock").each(function () {
            // converts string to integers and array
            var blockTime = parseInt($(this).attr("id").split("time")[1]);
            console.log( blockTime, currentTime)

            //Analyzes time and adds or removes class attribute depending on time.
            if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else if (blockTime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //Displays date in the format specified
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    
    hourChecker();
})