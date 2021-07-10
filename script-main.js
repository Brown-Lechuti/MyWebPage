
 //JQuery 
 $(document).ready(function(){
        /*alert("Welcome");*/
        $("#profile").hover(function(){
            (this).src ="data/motivation.png";
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
          $("#contactDropdown").slideDown(300);

        },
        function(){ 
            $("body").click(function(){
                $("#contactDropdown").slideUp(400);
            });
        });
        
    });

