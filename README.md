# THE DRIVING QUIZ

![Title image](/assets/readme-images/main-img.png "Title image")

The Driving Quiz is an online quiz game for those who are learning to drive a car. This game is about making aware of responsibility on roads currently on Irish Roads. The goal of this website is to provide information about how to drive a car and can test their knowledge with a fun interactive game.
      
The layout should be easily accessible and intuitive to new users. The project should conform
to the best practices of user experience design, accessibility and responsivity.

Visit the deployed site [The Driving Quiz](https://dania2021.github.io/thedriving-quiz/)

## CONTENTS
* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Video/Imagery](#videoimagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
     * [Home Page](#home-page)
     * [How to Play](#how-to-play)
     * [Quiz](#quiz)
       * [Question Counter](#question-counter)
       * [Timer](#timer)
       * [Score Counter](#score-counter)
       * [Question](#question)
       * [Answer Buttons](#answer-buttons)
       * [Navigational Buttons](#navigational-buttons)
     * [End](#end)
  * [Accessibility](#accessibility)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#framework-libraries--programs-used)
* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deloyment)
  * [Local Develpoment](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Testings](#testing)
  * [Validator Tests](#validator-tests)
  * [Lighthouse Tests](#lighthouse-tests)
  * [Browser Compatibility](#browser-compatibility)
  * [Manual Testing](#manual-testing)
  * [Bugs](#bugs)
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media) 
* [Acknowledgements](#acknowledgements)

## User Experience (UX)

  ### User Stories
  * As a user I want to be able to fully understand the purpose of The Driving Quiz from the first page.
  * As a user to be able to view the site on a range of device sizes.
  * As a user I want the site to be easy to navigate.
  * As a user I want the application to be easily operated with conventional functions.
  * As a user I want the application to be a reliable learning resource that is both functional and intuitive.

## Design

  ### Colour Scheme
  
  As the page of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users. The colours used for the quiz are intended to convey meaning and provide a visual aid to the user.

  * I have used #646464 as the overlay used over the sites background image.
  * I have used #32CD32 to display the right answer.
  * I have used #FF0000 to display the wrong answer.
  * I have used #FFFFFF for navigation button elements and #000000 text to provide better contrast.
  * I have used #FFFFFF for answer buttons and #000000 text to provide better contrast.

  ![Colour palette](/assets/readme-images/color-palette.JPG "Colour palette")

  ### Typography

  Google Fonts was used to import the chosen fonts for use in the site.

  * For the title of the page I have used google font Oswald.
  * For the body of the page I have used Quicksand. Quicksand is a sans-serif font which has lovely clean lines. I have chosen to use a sans-serif font for the body of the page as studies have found that sans-serif fonts are generally more legible to read on a screen.

  ### Video/Imagery

  It is used throughout sections of the site to provide consistency. The background have video for large screens and an image for tablet and mobile devices. We usually do not want to play the video on mobile due to high data cost, so we make the display property none of video on devices of max-width 768px. I want to use video or image as an background to give the user the feeling that they are participating in a driving quiz.

  ### Wireframes

  Wireframes were created for mobile, tablet and desktop using balsamiq.

  ![Home page wireframe](/assets/readme-images/home-page-wireframe.png "Home page wireframe")

  ![How to play wireframe](/assets/readme-images/how-to-play-wireframe.png "How to play wireframe")

  ![Quiz wireframe](/assets/readme-images/quiz-wireframe.png "Quiz wireframe")

  ![End game wireframe](/assets/readme-images/end-game-wireframe.png "End game wireframe")


## Features

   The Driving Quiz contains many features that are designed to enhance the user experience. These features are designed to conform to the best practices of user experience design and accessibility.

   All Pages on the website are responsive and have:

   * A favicon in the browser tab.

       ![Favicon](/assets/readme-images/favicon-img.png "Favicon")

   * The title of the site at the top of every page. This title also acts as a link back to the home page.

  ![Title](/assets/readme-images/title-img.png "Title")

   ### Home Page  
   The home page is the main landing page of The Driving Quiz. The home page of The Driving Quiz displays the sites name as a title and a container. This page displayed first to the user when they open or refresh the page.

   ![Home page](/assets/readme-images/home-page-img.png "Home Page")


  This container is centralised in the middle of the screen on larger screens and is responsive for smaller screen sizes. It holds some welcome text, including alerting the users that they can navigate back to the home page at any time by clicking on the page name. Below this are two buttons, how to play and start.

  ![Container](/assets/readme-images/container-img.png "Container")

  
  ### How to Play
  The how to play text elements is added using javascript when the how to play button is clicked. It helps the user to understand the nature of quiz before starting. It has a back button to navigate back to the main landing page when the user is ready to start the quiz.

   ![How to Play](/assets/readme-images/how-to-play-img.png "How to play")

  ### Quiz
  The quiz section is the main section of The Driving Quiz. This section is displayed when the user click the start button. The quiz contents are all held within a container which is hidden until the start button is clicked.
  
  The quiz section contains the question and the 4 answer choices. 
   
   ![Quiz](/assets/readme-images/quiz-img.png "Quiz")

   * #### Question Counter
       The Question Counter is displayed at the top left corner of the quiz container. This counter increases as the user continues through the quiz, each time when the user clicks the next button to go to the next question. 

   ![Question Counter](/assets/readme-images/question-no-img.png "Question Counter")

   * #### Timer
       The timer is displayed at the center of the quiz container. The timer value is updated every second using timercount function of javascript. This function check if the timer hits 0, then the interval timer is cleared and the timer stops.

      ![Timer](/assets/readme-images/timer-img.png "Timer")

   * #### Score Counter

       The Score Counter is displayed at the top right corner of the quiz container. If the answer selected was right, the score counter will add 10 to the score.

        ![Score Counter](/assets/readme-images/score-img.png "Score")

   * #### Question

       The question element is a text element that is displayed in a larger and bolder font and centralised in the container. The question element is saved within an object within the javascript question array. 

       ![Question image](/assets/readme-images/question-img.png "Question image")

   
   * #### Answer Buttons

      There are four buttons, each with one answer option which contains text  from the selected question object in the questions array. Event listeners are removed from all the answer buttons when a choice is made. The button selected will change styles depending on whether the answer selected was right or wrong. The buttons have a hover effect a scale of 1.02.

      ![Right Answer image](/assets/readme-images/right-img.png "Right Answer image")

       ![Wrong Answer image](/assets/readme-images/wrong-img.png "Wrong Answer image")

   * #### Navigational Buttons

       The quiz section features two navigational buttons. These buttons are next and end. The next button is hidden but becomes visible when a user makes a choice for a question. The next button is used to move the user to the next question in the questions array. When the next button is clicked a new question is displayed on the elements of the quiz section and the previous question is removed from the question array. The length of the quiz is 15 questions long. The if statement checks if the array length is equal to 14 and if it is knows the user has reached the last question. At this time the end button is displayed instead of the next button. When the end button is clicked the user is sent to the end section and the quiz container and all its elements are hidden from display. All buttons are consistent in styling with previous buttons. 

      ![Next and End Button image](/assets/readme-images/next-end-button.png "Next and End button image")

  ### End 
  The end section is the last section of The Driving Quiz site. It is the section navigated to after the user clicks the end button on the quiz. Then it displays the user score with a quote. There are 5 different types of quote, one if the user run out of time and other four depends on user score. It has a play again button to navigate back to the home page.

  ![Sorry Quote image](/assets/readme-images/sorry-img.png "Sorry Quote image")

  ![End Game image](/assets/readme-images/end-game-img.png "End Game image")

## Accessibility
  I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:

  * Using semantic HTML.
  * Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
  * Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.
  * Ensuring that there is a sufficient colour contrast throughout the site.
 
 ![Button Contrast image](/assets/readme-images/button-img.png "Button Contrast image")

  In a future implementation I think it would be a great accessibility feature to also add a symbol such as a tick or cross on the answer button to enable people who are colour blind to also be able to access the quiz easier, as the site relies on colour to display to the user whether an answer is right or wrong.

## Technologies Used

  * ### Languages Used

     HTML5, CSS3 and JavaScript were used.

  * ### Framework, Libraries & Programs Used

     * [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

     * [Git](https://git-scm.com/) - Used for version control.
     
     * [Github](https://github.com/) - Used to save and store the files for website.

     * [GitPod](https://gitpod.io/workspaces) - IDE used to create the site.

     * [Google Fonts](https://fonts.google.com/) - To import the fonts used on website.

     * [Birme](https://www.birme.net/?target_width=1000&target_height=1000&no_resize=true&auto_width=true&image_format=webp) - To resize images and convert to webp format.



     * [Google Developer Tools](https://developer.chrome.com/docs/) - To troubleshoot and test features, solve issues with responsiveness and styling.

     * [Favicon](https://favicon.io/) - To create favicon. 

     * [Am I Responsive?](https://ui.dev/amiresponsive?)  To show the website image on a range of devices.


## Deployment & Local Development

  * ### Deloyment

    The Driving Quiz repository is stored on GitHub. The site was created using GitPod and the live site is hosted on GitHub Pages. This is a guide to deploy a site on GitHub Pages using GitHub.
 
    1. Log in (or sign up) to Github.
    2. Go to the repository for this project, [Dania2021/thedriving-quiz](https://github.com/Dania2021/thedriving-quiz).
    3. Click on the Settings link.
    4. Click on the Pages link in the left hand side navigation bar.
    5. Under source, select branch:main, leave the folder on root and click save.
    6. Your live Github Pages site is now deployed at the URL shown.

  * ### Local Development

    #### How to Fork

    To fork the TheDriving-Quiz repository:

    1. Log in (or sign up) to Github.
    2. Go to the repository for this project, [Dania2021/thedriving-quiz](https://github.com/Dania2021/thedriving-quiz).
    3. Click the Fork button in the top right corner.

    #### How to Clone  
      
    To clone the The Driving-Quiz repository:

    1. Log in (or sign up) to GitHub.
    2. Go to the repository for this project, [Dania2021/thedriving-quiz](https://github.com/Dania2021/thedriving-quiz).
    3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
    4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
    5. Type git clone into the command line and then paste the URL copied from GitHub.
    6. Press enter and the local repository clone will be created.  


## Testing
  Testing was ongoing throughout the entire build. I utilised Chrome developer tools whilst building to pinpoint and troubleshoot any issues as I went along. During development I made use of google developer tools to ensure everything was working correctly and to assist with troubleshooting when things were not working as.

  * ### Validator Tests
       [The W3C HTML Markup Validation Service](https://validator.w3.org/) was used to validate the index.html page of the website and passed showing no errors and warnings.

      ![Index Page Validator Test image](/assets/readme-images/quiz-html-validator.png "Index Page Validator Test image")
 

       [The W3C CSS Markup Validation Service](https://jigsaw.w3.org/css-validator/) was used to to validate the style.css CSS Document and passed showing no errors.

      ![CSS Document Validator Test image](/assets/readme-images/quiz-css-validator.png "CSS Document Validator Test image")

       [ JSHint Javascript Validation Service](https://jshint.com/)  was used to validate the script.js Javascript Document and passed showing no errors and warnings.
   
      ![JavaScript Document Validator Test image](/assets/readme-images/js-validator-test.png "JavaScript Document Validator Test image")

  * ### Lighthouse Tests
      I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

       * Desktop Result
       ![Index Page Desktop Lighthouse Test](/assets/readme-images/lighthouse-desktop.png "Index Page Desktop Lighthouse Test")
 
      * Mobile Result
      ![Index Page Mobile Lighthouse Test](/assets/readme-images/lighthouse-mobile.png "Index Page Mobile Lighthouse Test")
 

  * ### Browser Compatibility
      The Driving Quiz was tested on a multitude of different browsers to check for any compatibility issues. Browser compatibility tests were conducted on Google Chrome, Safari and Firefox with no visible issues apparent in layout, appearance, or functionality. Responsiveness was also consistent across all browsers.

  * ### Manual Testing
      
      #### Testing User Stories

      * The Driving Quiz gives basic knowledge of how to drive a car.
      * I have developed the site with responsiveness in mind.
      * Buttons are used throughout the site for navigation, much like a mobile app.
      * I decided that I didn't want to add a navigation bar or footer, as these would make the site look more like a traditional webpage. The page title also acts as a link to the home page.
      * The site is available for use whenever is convenient to the user.


     #### Full Testing

     I performed the following testing using a number of devices (Samsung Galaxy S8, iPhone 13, iPhone 7, HP 15 Notebook, Lenevo Think Pad)

      Home Page
      * Title 
          
          Clicking on the sites title will directs the user back to the home page. 

      * How to play button
        
         Clicking on how to play button, hides the buttons and the introduction text. It displays the instructions on how to play the game using javascript. 

      * Back Button
        
        Clicking on back button, hides the back button. Instead of instructions, it displays the introduction text and start and how to play buttons. 

      * Start Button
        
        Clicking on start button directs the user to the start of quiz. It also hides the outer container and displays the quiz container with the quiz elements. The start button also triggers the questions array to be shuffled and for the first object in the array to be selected as the first question.

      * All buttons(hover effect)
        
        All white buttons with black text will change to black with white text when hovered over.	Each button displayed the correct styling when hovered over.

    Start Quiz

      * Title 
          
          Clicking on the sites title will directs the user back to the home page. 

      * Question

          The question is being added from the javascript property question from each question object and the question is displaying.
      * Answers

          The answers are being added from the javascript questions array and answers are displaying.

       * Right Answer Property
           
           I am able to check what the right answer is. I can then check whether the property has been applied only to the button containing the right answer.

       * Right Button 

          When a correct answer is clicked the button is changing background colour to green with white text and then the user cannot choose an answer as the event listeners for the answer buttons are removed. 

       *  Wrong Button

          When a wrong answer is clicked the button is changing background colour to red with white text and then the user cannot choose an answer as the event listeners for the answer buttons are removed. 
      
       * Question No Counter

          Each time the next button is clicked the Question no counter increases by 1.

       * Score Counter

         When a right answer was selected the score increased by 10. When a wrong score was selected the score stayed the same.

       * Timer Counter

          The timer value is updated every second. The user cannot choose an answer if the timer runs out as the event listeners for the answer buttons are removed.

       * Next button(becomes visible)

         When an answer is clicked the next button is displaying so the user can progress to the next question, or to the end button if all 15 questions have been answered.

       * Next button hover effect

         A button with a white background & black text is changing to a button with a black background & white text when hovered over.

       * Next button(clicked)

         When clicked all answer styles is remove, the next button is become hidden again and a new question and answer loaded if there are questions left. If all questions have been answered the end button should appear.

       * End Button(clicked)

         Clicking on end button directs the user to the end of quiz. It also hides the quiz container and displays the end container with play again button.

      End Quiz

      * Title 
          
          Clicking on the sites title will directs the user back to the home page.
      
      * Score

         Score area is populating with the score you have achieved and it displays correctly.

      * Quote

        The end quote is displaying in the end container.

      * Play Again Button

        Clicking on this button will take you back to the home page and is directing back to the home page.

  * ### Bugs
    
       #### Resolved
        
       * Players were able to select an answer which would then display whether right or wrong. However they could still click on the answers which meant they could click all the answers to receive the points. I researched a way and then found that I could use remove event listeners. This then allows me to first add event listeners to the buttons when a new question has been populated and once a selection has been made, the event listeners are removed from the answer buttons until the user clicks next to advance onto the next question.

       * Another bug that presented was when the next button was clicked the timer didnot start again from 60 seconds. To resolve this I have added some code in the next question function by assigning the value to timer and time second and set the timer again.
       

       * One of the bugs was when the play again button was clicked by the user, the quiz don't stop and it was not directing to the home page. To resolve this, a javascript function was created called again play. The again play function sends the user to the index.html home page via window.open. 

       #### Unresolved

       There is a warning displaying in the console on the live page. This error seems to be because GitHub hosted pages disable googles 3rd party cookie alternative FLoC, which then throws this error. The error doesn't affect the site in any way.

       ![Warning Message image](/assets/readme-images/error.png "Warning Message image")

## Credits

  ### Code Used
  The code used for the array randomizer is the Fisher-Yates shuffle. I used the following [YouTube tutorial](https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3
) to further adapt the shuffle I had researched on W3Schools to work with the data I had.

  I used this [video tutorial](https://www.youtube.com/watch?v=znqUwx0b0HI) on You Tube by Easy Tutorials to learn how to make video responsive by using media query for aspect ratios.

  ### Content 
  All questions was collated from [Theory Test Ireland](https://theorytestireland.org/).

  All other content for the site, such as introduction messages, instructions and quotes were written by myself.

  ### Media

  The background video and image are from [Pexels](https://www.pexels.com/).

## Acknowledgements

 The Driving Quiz was created as my second portfolio project. I would like to thank my mentor Marcel Mulders for his helpful feedback and encouragement throughout the development process. I would also like to thank tutor of code institute for their support. I'd like to thank fellow Code Institute students in May 2022 class at code institute.

 Dania Khanam
         