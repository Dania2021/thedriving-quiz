const play = document.getElementById('play-btn');
const start = document.getElementById('start-btn');
const back = document.getElementById('back-btn');
const next = document.getElementById('next-btn');
const end = document.getElementById('end-btn');

const outerContainer = document.querySelector('.outer-container');
const heading = document.querySelector('.sub-heading');
const introText = document.querySelector('.intro-text');
const intro = document.querySelector('.intro-div');
const questionContainer = document.querySelector('.question-container');
const question = document.getElementById('question');
const answerBtn = document.getElementsByClassName('ans-btn');
const answer1 = document.getElementById('answer-one');
const answer2 = document.getElementById('answer-two');
const answer3 = document.getElementById('answer-three');
const answer4 = document.getElementById('answer-four');

const questionCount = document.getElementById('question-count');
const scoreCount = document.getElementById('score-count');
const timer = document.getElementById('timer-count');

// EVENT LISTENERS
play.addEventListener('click', howToPlay);
back.addEventListener('click', backToHome);
start.addEventListener('click', startGame);
next.addEventListener('click', nextQuestion);

// HOW TO PLAY FUNCTION
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

  // BACK TO HOME FUNCTION
  function backToHome(){
  window.open('index.html', '_self');
  }

  // QUESTIONS ARRAY
  const questions = [  
    {
     question : 'What is the maximum speed limit on motorways?',
     answer1 : '100 km/h',
     answer2 : '200 km/h',
     answer3 : '120 km/h',
     answer4 : '80 km/h',
     right : '120 km/h',
    },
    {
      question : 'What is the meaning of flashing amber light?',
      answer1 : 'Stop',
      answer2 : 'Go',
      answer3 : 'Wait for the pedestrian',
      answer4 : 'None of the above',
      right : 'Wait for the pedestrian',
    },
    {
      question : 'What lights should a driver use when driving in dense fog?',
      answer1 : 'Drive with dipped headlights and fog lights',
      answer2 : 'Drive with full headlights and fog lights',
      answer3 : 'Drive with sidelights and fog lights',
      answer4 : 'Drive with side lights and hazard warning lights',
      right : 'Drive with dipped headlights and fog lights',
      },
      {
        question : "What effect can wet weather have on the vehicle's exterior mirror?",
        answer1 : "It can keep them clean",
        answer2 : "It has no effect",
        answer3 : "It can distort the rear vision of the driver",
        answer4 : "It has no effect",
        right : "It can distort the rear vision of the driver",
      },
      {
        question : 'What should a driver do if their vehicle breaks down in a tunnel?',
        answer1 : 'Beckon other traffic to over take',
        answer2 : 'Reverse the vehicle to the exit',
        answer3 : 'Switch on the hazard warning lights',
        answer4 : 'Wait in the vehicle for help to arrive',
        right : 'Switch on the hazard warning lights',
      },
      {
        question : 'If a vehicle is driven with low oil pressure, what effect does this have on its engine?',
        answer1 : 'It increases exhast emissions',
        answer2 : 'It increases fuel consumption',
        answer3 : 'It increases fuel efficiency',
        answer4 : 'It increases wear and tear on the engine',
        right : 'It increases wear and tear on the engine',
      },
      {
        question :'What can be affected by driving on under-inflated tyres?',
        answer1 : 'Braking ability',
        answer2 : 'Climate control system',
        answer3 : 'Engine temperature',
        answer4 : 'The exhaust system',
        right : 'Braking ability',
      },
      {
        question : 'What is the minimum legal tread depth for tyres on car?',
        answer1 : '0.6 millimetres',
        answer2 : '1.6 millimetres',
        answer3 : '1 millimetres',
        answer4 : '2.6 millimetres',
        right : '1.6 millimetres',
      },
      {
        question : 'What does a continuous white line in the centre of the road mean?',
        answer1 : 'Vehicle may cross the line for a short time',
        answer2 : 'Vehicle may perform a U turn',
        answer3 : 'Vehicle may not cross or straddle the line',
        answer4 : 'Vehicle may park during daylight hours only',
        right : 'Vehicle may not cross or straddle the line',
      },
      {
        question : 'At road junctions, what type of road users are particularly vulnerable?',
        answer1 : 'Pedestrians',
        answer2 : 'Car drivers',
        answer3 : 'Van drivers',
        answer4 : 'Tractor drivers',
        right : 'Pedestrians',
      },
      { 
        question : "When should a driver use vehicle's rear view mirror",
        answer1 : "Before moving offf only",
        answer2 : "Before reversing only",
        answer3 : "Before switching on the rear demister",
        answer4 : "Before changing direction",
        right : "Before changing direction",
      },
      {
        question : 'What can be achieved by the driving style known as Eco-driving?',
        answer1 : 'Increased fuel consumption',
        answer2 : 'Increased journey times',
        answer3 : 'Reduced fuel consumption',
        answer4 : 'Reduced journey times',
        right : 'Reduced fuel consumtpion',
      },
      {
        question : 'What is the purpose of catalytic converter',
        answer1 : 'Its allows the engine to quickly reach its normal operating temperature',
        answer2 : 'It increases engine power',
        answer3 : 'It decreases engine power',
        answer4 : 'It filters exhaust gases and reduces air pollution',
        right : 'It filters exhaust gases and reduces air pollution',
      },
      {
        question : "What does blue smoke coming from a vehicle's exhaust generally means?",
        answer1 : "The engine is burning oil",
        answer2 : "The engine is overheating",
        answer3 : "The air filter needs to be replaced",
        answer4 : "The catalytic converter is worn out",
        right : "The engine is burning oil",
      },
      {
        question : 'How are emergency vehicles identified?',
        answer1 : 'By continuously lit red lights',
        answer2 : 'By flashing amber and white lights',
        answer3 : 'By flashing red or blue lights',
        answer4 : 'By flashing green lights',
        right : 'By flashing red or blue lights',
      },
    ];

let currentQuestion = {};
let questionAvailable = [];
let score = 0;
let questionNo = 1;
let timeSecond = 60;
let intervalTimer;

// START GAME FUNCTION
function startGame() {
    outerContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    questionAvailable =[...questions];
    shuffleQuestion(questionAvailable);
    intervalTimer = setInterval(timerCount, 1000);
    currentQuestion = questionAvailable[0];
    getQuestion(currentQuestion);
    
   }
 
// GET QUESTION FUNCTION
function getQuestion(){
  question.innerHTML = currentQuestion.question;
  answer1.innerHTML = currentQuestion.answer1;
  answer2.innerHTML = currentQuestion.answer2;
  answer3.innerHTML = currentQuestion.answer3;
  answer4.innerHTML = currentQuestion.answer4;  
}
 
// SHUFFLE THE QUESTIONS ARRAY FUNCTION - using Fisher Yates Shuffle
// researched on W3Schools and adapted as shown on youtube tutorial - 
// https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3

function shuffleQuestion(questionAvailable) {
  for (let i = questionAvailable.length - 1; i >= 0; i --) {
    const s = Math.floor(Math.random() * (i + 1));
    [questionAvailable[i], questionAvailable[s]] = [questionAvailable[s], questionAvailable[i]];
  }
 }

 //NEXT QUESTION FUNCTION - run when next button pressed
function nextQuestion() {
  questionAvailable.shift();
  currentQuestion = questionAvailable[0];
  getQuestion(currentQuestion);
  questionIncrement();
 }

 // QUESTION NUMBER INCREMENT
 function questionIncrement() {
  ++questionNo;
  questionCount.innerHTML = questionNo;
 }

 //TIMER COUNT FUNCTION
 function timerCount() {
  --timeSecond;
  timer.innerHTML = timeSecond;
  if(timeSecond <= 0) {
    clearInterval(intervalTimer);
  }
}



function checkAnswer() {

}

function endGame() {

}