/**
 * Reference to audio element.
 */
const song = new Audio('sounds/sidimansour.mp3');

document.querySelector('.spotify1').addEventListener('click', function () {
  /**
   * If the song is already playing, pause it and seek to the beginning
   * before playing again.
   */

  song.pause();
  song.currentTime = 0;
  song.play();
});

// Ranom Nickname Generators //

function switchText (){
  var randomWords = ['Ieumundo', 'Ewan', 'Flid', 'Ieuan'];
  var randomIndex = Math.floor(Math.random() * 4);
  document.getElementById("bestManHead").innerHTML = randomWords[randomIndex];
}

const btn1 = document.getElementById('btn1');
if (btn1) {
btn1.addEventListener("click", switchText);
};

function switchText2 (){
  var randomWords = ['eefa', 'iofe', 'sister', 'aiofe'];
  var randomIndex = Math.floor(Math.random() * 4);
  document.getElementById("bestManHead2").innerHTML = randomWords[randomIndex];
}

const btn2 = document.getElementById('btn2');
if (btn2) {
btn2.addEventListener("click", switchText2);
};



