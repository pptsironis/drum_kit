// document.querySelector("button").addEventListener("click", handleClick)
//
// function handleClick() {
//     alert("I got clicked")
// }
const drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {

        let drumLetter = this.innerHTML;

        makeSound(drumLetter);

        buttonAnimation(drumLetter);

        // this.style.color = "white"
    });
    document.addEventListener("keydown", function (e) {
        makeSound(e.key);
        buttonAnimation(e.key);
    });

    function makeSound(key){
        switch (key) {
            case "w":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "a":
                let kick_bass = new Audio('sounds/kick-bass.mp3');
                kick_bass.play();
                break;
            case "s":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "j":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "k":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            default: console.log(key);
        }
    }

    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.toggle("pressed")
        setTimeout(function (){
            activeButton.classList.toggle("pressed");
        }, 100);
    }
}