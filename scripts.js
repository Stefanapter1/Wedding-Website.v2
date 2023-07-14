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

var randomWords = ['Ieumundo', 'Ewan', 'Flid', 'Ieuan'];
var wordDiv = document.getElementsByClassName('bestManHead');

function randomWord() {
  wordDiv.innerHTML =
    randomWords[Math.floor(Math.random() * randomWords.length)];
}

var randomWords2 = ['Eefee', 'Aiofe', 'Sister', 'Aiofe'];
var wordDiv2 = document.getElementById('bridesMaidHead');

function randomWord2() {
  wordDiv2.innerHTML =
    randomWords2[Math.floor(Math.random() * randomWords2.length)];
}
