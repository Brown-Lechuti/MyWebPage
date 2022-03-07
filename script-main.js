
 //JQuery 
 $(document).ready(function(){
        /*alert("Welcome");*/
        $("#profile").hover(function(){
            (this).src ="https://brownlechuti.w3spaces.com/motivation.png?bypass-cache=1625925814";
        },
        function(){
            (this).src = "https://brownlechuti.w3spaces.com/profile.png?bypass-cache=1625588081";

        });
        $("#brown_word").hover(function(){
            (this).innerHTML = "Botshelo";
        },
        function(){
            (this).innerHTML = "Brown";
        });

        $("#btnContact").hover(function(){
          $("#btnarr").removeClass("fa fa-carent-down").addClass("fa fa-caret-up");
          $("#contactDropdown").slideDown(300);

        },
        function(){ 
            $("body").click(function(){
                $("#btnarr").removeClass("fa fa-caret-up").addClass("fa fa-caret-down");
                $("#contactDropdown").slideUp(100);
            });
        });
        
    });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}   
