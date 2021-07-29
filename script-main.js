
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
          $("#contactDropdown").slideDown(300);
            $("#btnarr").removeClass("fa fa-caret-down").addClass("fa fa-caret-up");

        },
        function(){ 
            $("body").click(function(){
                $("#contactDropdown").slideUp(100);
                $("#btnarr").removeClass("fa fa-caret-up").addClass("fa fa-caret-down");
            });
        });
        
    });

