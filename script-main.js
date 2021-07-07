
 //JQuery funcion
 $(document).ready(function(){
        alert("Welcome");
        $("#profile").hover(function(){
            (this).src ="https://brownlechuti.w3spaces.com/motivation.jpg?bypass-cache=1625169654";
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
        
    });
/*
function changeName(name) {
    name.innerHTML= "Botshelo";
}
function resetName(name) {
    name.innerHTML = "Brown";
}


function changePic(imgTag)
{
    imgTag.src = "https://brownlechuti.w3spaces.com/motivation.jpg?bypass-cache=1625169654";
}
function resetPic(imgTag)
{
    imgTag.src = "https://brownlechuti.w3spaces.com/profile.png?bypass-cache=1625588081";
}*/
