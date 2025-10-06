const sounds = ["sounds/boom.wav", "sounds/clap.wav" ,"sounds/hihat.wav","sounds/kick.wav","sounds/openhat.wav","sounds/ride.wav","sounds/snare.wav","sounds/tink.wav","sounds/tom.wav"]
let i = 0;

let sound;
document.addEventListener("keydown", function(x) {
   playAudio(x.key.toUpperCase())
   console.log(x.key.toUpperCase())
});



function playAudio(buttonID){
  switch(buttonID){

    case "A":
      i = 0
      sound = new Audio(sounds[i])
      sound.play();
      flash(buttonID)
      break
    case "S":
      i = 1
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "D":
      i = 2
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "F":
      i = 3
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "G":
      i = 4
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "H":
      i = 5
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "J":
      i = 6
      sound = new Audio(sounds[i])
      sound.play();
      flash(buttonID)
      break
    case "K":
      i = 7
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
    case "L":
      i = 8
      sound = new Audio(sounds[i])
      sound.play()
      flash(buttonID)
      break
   }
}

function flash(button){
  element = document.getElementById(button)
  element.classList.add("active")

  setTimeout(() => {
    element.classList.remove("active");
  }, 50);
}