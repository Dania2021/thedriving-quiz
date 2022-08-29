# THE DRIVING QUIZ

The Driving Quiz is an online quiz game for those who are learning to drive a car. This game is about making aware of reponsibility on roads currently on Irish Roads. The goal of this website is to provide information about how to drive a car and can test their knowledge with a fun interactive game.
      
The layout should be easily accessible and intuitive to new users. The project should conform
to the best practices of user experience design, accessibility and responsivity.

Visit the deployed site [The Driving Quiz](https://dania2021.github.io/thedriving-quiz/)

## CONTENTS
* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
     * [Home Page](#home-page)
     * [How to Play](#how-to-play)
     * [Quiz](#quiz)
     * End
  * Accessibility
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#framework-libraries--programs-used)
* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deloyment)
  * [Local Develpoment](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* Testings
  * Validator Tests
  * Lighthouse Tests
  * Browser Compatibility
  * Manual Testing
  * Bugs
* Credits
  * Code Used
  * Content
  * Media 
* Acknowledgements

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
  The quiz section is the main section of The Driving Quiz. This section is displayed when the user click the start button.The quiz contents are all held within a container which is hidden until the start button is clicked.
  
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

   

  
