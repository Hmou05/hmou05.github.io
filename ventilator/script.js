// If the page is loaded, this animation will start.
const snake = document.getElementById("snake");
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        snake.style.background = "linear-gradient(to right, #fed9b7, #889bf3)";
        snake.style.width = 55 + "vw";
    }, 3000);
})
//-----------------------------------------------------------------------------------------------

