
let drums = document.getElementsByClassName('drum');
let i;



// for button click
for(i=0; i < drums.length ; i++){
    document.querySelectorAll('button')[i].addEventListener("click",function (){
    switch(this.innerHTML){
        case "w":
            let tom_1 = new Audio("./music/tom-1.mp3");
            tom_1.play();
        break;

        case "a":
            let tom_2 = new Audio("./music/tom-2.mp3");
            tom_2.play();
        break;

        case "s":
            let tom_3 = new Audio("./music/tom-3.mp3");
            tom_3.play();
        break;

        case "d":
            let tom_4 = new Audio("./music/tom-4.mp3");
            tom_4.play();
        break;

        case "j":
            let snare = new Audio("./music/snare.mp3");
            snare.play();
        break;

        case "k":
            let crash = new Audio("./music/crash.mp3");
            crash.play();
        break;

        case "l":
            let kick_bass = new Audio("./music/kick-bass.mp3");
            kick_bass.play();
        break;

        default:
            console.log(this.innerHTML);

        
    }
        


});
}

function drumsound(){
    
}