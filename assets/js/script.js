const play = document.getElementById('play-btn');
const start = document.getElementById('start-btn');
const back = document.getElementById('back-btn');

const outerContainer = document.querySelector('.outer-container');
const heading = document.querySelector('.sub-heading');
const introText = document.querySelector('.intro-text');
const intro = document.querySelector('.intro-div');

play.addEventListener('click', howToPlay);
back.addEventListener('click', backToHome);

function howToPlay() {
    heading.classList.add('hide');
    introText.classList.add('hide');
    back.classList.remove('hide');
    start.classList.add('hide');
    play.classList.add('hide');
    intro.innerHTML = `<h2>How to play</h2>
        <p>There are fifteen questions</p>
        <p>You have 60 seconds to choose your answer you think is correct</p>
        <p>You get 10 points for each correct answer</p>
        <p>When the next button appears, click it to continue to the next question</p>
      `;
}

  function backToHome(){
  window.open('index.html', '_self');
  }

  