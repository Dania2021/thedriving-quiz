/*Variables */
//Navigational Buttons
const play = document.getElementById('play-btn');
const start = document.getElementById('start-btn');
const back = document.getElementById('back-btn');
const next = document.getElementById('next-btn');
const end = document.getElementById('end-btn');
const playAgain = document.getElementById('again-btn');

//Containers
const outerContainer = document.querySelector('.outer-container');
const questionContainer = document.querySelector('.question-container');
const endContainer = document.querySelector('.end-container');

//Home Page
const heading = document.querySelector('.sub-heading');
const introText = document.querySelector('.intro-text');
const intro = document.querySelector('.intro-div');

//Quiz Area
const question = document.getElementById('question');
const answerBtn = document.getElementsByClassName('ans-btn');
const answer1 = document.getElementById('answer-one');
const answer2 = document.getElementById('answer-two');
const answer3 = document.getElementById('answer-three');
const answer4 = document.getElementById('answer-four');
const questionCount = document.getElementById('question-count');
const scoreCount = document.getElementById('score-count');
const timer = document.getElementById('timer-count');

//End Quiz
const endScore = document.getElementById('end-score');
const endQuote = document.getElementById('end-quote');

// EVENT LISTENERS
play.addEventListener('click', howToPlay);
back.addEventListener('click', backToHome);
start.addEventListener('click', startGame);
next.addEventListener('click', nextQuestion);
end.addEventListener('click', endGame);
playAgain.addEventListener('click', againPlay);

// HOW TO PLAY FUNCTION
function howToPlay() {
  //add the hide class to heading
  heading.classList.add('hide');
  //add the hide class to intro text
  introText.classList.add('hide');
  //remove hide class from back button
  back.classList.remove('hide');
  //add hide class to start button
  start.classList.add('hide');
  //add hide class to how to play button
  play.classList.add('hide');
  intro.innerHTML = `<h2>How to play</h2>
        <p class="how-to">There are fifteen questions related on how to drive in Ireland</p>
        <p class="how-to">You have 60 seconds to choose your answer you think is correct</p>
        <p class="how-to">You get 10 points for each correct answer</p>
        <p class="how-to">When the next button appears, click it to continue to the next question</p>
        <p class="how-to">When the end button appears, click it to end the quiz</p>
      `;
  }

// BACK TO HOME FUNCTION
function backToHome(){
  //remove hide class from intro text
  introText.classList.remove('hide');
  //add the hide class to back button
  back.classList.add('hide');
  //remove hide class from heading
  heading.classList.remove('hide');
  //remove hide class from start button
  start.classList.remove('hide');
  //remove hide class from how to play button
  play.classList.remove('hide');
  intro.innerHTML = `
      <h2 class="sub-heading"><i class="fa-solid fa-car-side"></i> Welcome to the Driving Quiz <i class="fa-solid fa-car-side"></i></h2>
      <p class="intro-text">Do you want to test yourself how much you know about driving?<br><br>
      Use the button below to navigate to the page you would like to view. You can return to this home page by simply clicking the title on the top of each page.</p>
    `;
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
   question : 'What colour traffic light comes on after a non-flashing amber light?',
   answer1 : 'Flashing red light',
   answer2 : 'Flashing amber light',
   answer3 : 'Red only',
   answer4 : 'Green only',
   right : 'Red only',
  },
  {
   question : 'After changing a wheel on a vehicle, which of the following should be checked soon afterwards?',
   answer1 : 'The tyre tread depth',
   answer2 : 'The wheel nuts',
   answer3 : 'The air valve',
   answer4 : 'The brake pad clearance',
   right : 'The wheel nuts',
  },
  {
   question : "What effect can wet weather have on the vehicle's exterior mirror?",
   answer1 : 'It can keep them clean',
   answer2 : 'It has no effect',
   answer3 : 'It can distort the rear vision of the driver',
   answer4 : 'None of the above',
   right : 'It can distort the rear vision of the driver',
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
   question : 'What lights should a vehicle show at dusk?',
   answer1 : 'Daytime Running Lights',
   answer2 : 'Fog lights',
   answer3 : 'Full headlights',
   answer4 : 'Dipped headlights',
   right : 'Dipped headlights',
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
   question : "When should a driver use vehicle's rear view mirror?",
   answer1 : 'Before moving offf only',
   answer2 : 'Before reversing only',
   answer3 : 'Before switching on the rear demister',
   answer4 : 'Before changing direction',
   right : 'Before changing direction',
  },
  {
   question : 'What can be achieved by the driving style known as Eco-driving?',
   answer1 : 'Increased fuel consumption',
   answer2 : 'Increased journey times',
   answer3 : 'Reduced fuel consumption',
   answer4 : 'Reduced journey times',
   right : 'Reduced fuel consumption',
  },
  {
   question : 'What do double continous yellow lines at the side of road mean?',
   answer1 : 'Taxi parking only',
   answer2 : 'Keep outside the yellow lines',
   answer3 : 'Parking prohibited at all times',
   answer4 : 'Parking permitted',
   right : 'Parking prohibited at all times',
  },
  {
   question : "What does blue smoke coming from a vehicle's exhaust generally means?",
   answer1 : 'The engine is burning oil',
   answer2 : 'The engine is overheating',
   answer3 : 'The air filter needs to be replaced',
   answer4 : 'The catalytic converter is worn out',
   right : 'The engine is burning oil',
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

//Let variables
let currentQuestion = {};
let questionAvailable = [];
let score = 0;
let questionNo = 1;
let timeSecond = 60;
let intervalTimer;

// START GAME FUNCTION
function startGame() {
  //add the hide class to outer container
  outerContainer.classList.add('hide');
  //removes hide class from the question container to display
  questionContainer.classList.remove('hide');
  questionAvailable =[...questions];
  shuffleQuestion(questionAvailable);
  //start the timer
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
  for (let answer of answerBtn) {
    if(answer.classList.contains('right')) {
      answer.classList.remove('right');
    } else {
      answer.classList.remove('wrong');
    }
  }
  for(let answer of answerBtn) {
    //add event listeners to answer buttons
    answer.addEventListener('click', checkAnswer);
  }
  //add hide class to the next button
  next.classList.add('hide');
  //call question increment function
  questionIncrement();
  clearInterval(intervalTimer);
  timer.innerHTML = 60;
  timeSecond = 60;
  //start Countdown Timer
  intervalTimer = setInterval(timerCount, 1000);
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
    // Clear timer interval
    clearInterval(intervalTimer);
    // Call end game function
    endGame();
  }
}

// Answer Buttons
for (let answer of answerBtn) {
  // Add event listener for user click to call function checkAnswer to all answer buttons
  answer.addEventListener('click', checkAnswer);
}
  
//CHECK ANSWER FUNCTION
function checkAnswer() {
  if(this.innerHTML === currentQuestion.right) {
    // stop the timer
    clearInterval(intervalTimer);
    //call score increment function
    scoreIncrement();
    this.classList.add('right');
    // Remove event listeners from answer buttons
      for (let answer of answerBtn) {
         answer.removeEventListener('click', checkAnswer);
      }
  } else {
     //stop the timer
     clearInterval(intervalTimer);
     this.classList.add('wrong');
     // Remove event listeners from answer buttons
     for (let answer of answerBtn) {
      answer.removeEventListener('click', checkAnswer);
      }
    }
  if(questionNo <= 14) {
    //removes hide class from the next button to display
    next.classList.remove('hide');
  } 
  else {  
    //removes hide class from the end button to display
    end.classList.remove('hide');
  }
}

//SCORE INCREMENT FUNCTION
function scoreIncrement() {
  score = score + 10;
  scoreCount.innerHTML = score;
}
  
//END GAME FUNCTION
function endGame() {
  //add hide class to the question container
  questionContainer.classList.add('hide');
  //removes hide class from the end container to display
  endContainer.classList.remove('hide');
  endScore.innerHTML = score;
  if (timeSecond === 0) {
    endQuote.innerHTML = 'Sorry!!! your time is out try again';
  } else if (score <= 40) {
      endQuote.innerHTML = 'A little study is needed';
  } else if (score <= 80) {
      endQuote.innerHTML = "You're almost halfway";
  } else if (score <= 120) {
         endQuote.innerHTML = 'Good job you can do better';
  } else {
         endQuote.innerHTML = 'Excellent, you played very well';
    }
}    

 //FUNCTION PLAY AGAIN 
 function againPlay() {
  // Open home page in same tab
  window.open('index.html', '_self');
 }