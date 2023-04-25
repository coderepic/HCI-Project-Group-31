README

Requirements to Run the Project:
The project can be run simply by opening index.html
No servers or dependencies are required.

-------------------------------------------------------------------------------------------------------------

Brief Description of the Project and Tasks the Installation Addresses
The system is a trivia video game which allows people to learn more about geography. The tasks that our system addresses are:
1. View landmarks to learn about new places
2. Use maps to identify locations

Please note that the second task was slightly reworded from the version we included on A5. We got permission on Ed discussion from the course staff to do so. On A5, we wrote this task as “use maps for local travel.” 

We decided to reword it because we wanted to include maps depicting both local regions and regions around the world. We felt that doing so would allow us to introduce more question variety for the users and better address the goal of helping people become more geographically literate. 

We did still include maps of local regions (such New York City, Boston, etc.). Thus, we did not abandon the original task — we just expanded upon it. 

--------------------------------------------------------------------------------------------------------------

Controls: 
Raise one arm on the title screen to start the game
When you are on a screen that has two options you can select between, you can extend your left arm horizontally to select the option on the left side of the screen. You can extend your right arm horizontally to select the option on the right side of the screen.
When you are on a trivia question, the answer you have selected will be highlighted in green. You have 10 seconds to answer each question. At the end of the 10 seconds, the highlighted answer will be registered as your final answer. 
Raise only one arm to continue on the screens that say “raise one arm to continue”

Players can raise their arms (left or right) to select different menu options. They will begin by selecting one of two game modes. The game modes include landmark identification and location identification on a map.

For each trivia question, the players will be able to raise either their left or right arms to select one of two possible answers to a trivia question corresponding to the game mode. A point is earned for each correct answer that the player scores, and the final score will be displayed after all questions have been answered.
Constraints from the Deployment
Make sure there is ONLY ONE player in the sensor range at a time.
(We tried reprogramming the game so that only the player closest to the center is the active user, but we were running into errors when we attempted this)

---------------------------------------------------------------------------------------------------

Collaboration Record
Eric Wang (ew579)
I mainly worked on foundational features and game logic that were controlled by HTML buttons. These were later refined and modified to work with Kinect data. 
Specific features include: encapsulation of HTML element hiding/showing functions into game-state functions, a score counter,  division of screen into two sides, a streamlined top bar that contains the timer, trivia question, score, and questions remaining to save screen space. 
Basic game logic that I wrote included encapsulating related HTML elements together into classes that were controlled by hiding/showing them based on the game state, distinguishing between correct and incorrect answers and changing the game state accordingly, etc. Additionally, the timer and score counter required the development of game logic that controlled the game state (i.e. if a question is answered, reset timer; if the timer is at 0 and no answers were selected, transition to the incorrect answer screen). I also worked on fixing bugs in the game logic. 
I aided in coordinating/communicating project expectations and goals. I also visited the display on Tuesday during the class time to test the program.


Archit Kumar (ak2778)
(I have listed my contributions by category)
Project Setup:
Created the game’s HTML, CSS, Javascript files
Created a GitHub repository to store the project
Downloaded the HTML demo code from the class GitHub and copied the portions that would allow our own project to connect to the Kinect sensor for TV4.
Game Components & Logic:
Wrote HTML for 10 trivia questions. I conceptualized these questions myself by researching landmarks around the world. I tried to make both of the options seem like feasible options so that the trivia was more challenging.
Downloaded images for use in the project
Used Javascript to write the main game loop for transitioning from the title screen to the instructions screen to individual trivial questions.
Wrote the code to display the final results after all trivia questions had been answered
User Input:
Wrote test scripts to display the coordinates of the player joints so we could better use these as user input. 
Wrote the function that reads whether the user is raising one arm, two arms, or no arms
Wrote the function that reads whether the user is extending their left arm or their right arm to select a user input.
Reworked the entire game logic so that it would be compatible with user inputs rather than just HTML button clicks.
Implemented functionality allowing the game to reset when the user walks away from the screen
Bug Fixes:
Reworked the CSS of the game so that the game components could be properly aligned on the page.
Changed the game to detect the motions of only the player who was closest to the center of the screen
Meetings & Coordination
Organized a group meeting on Sunday to help project partners better understand the code and their tasks
Visited the display on Tuesday (class time) to demonstrate the project to the course TFs
Regularly messaged group members to remind them of tasks and expectations
Regularly communicated with course staff on Ed discussion regarding questions, expectations, and concerns
Kaitlyn Greenwell (kng26)
I helped with the visual elements of the program, although not all of it made it into the final program for a lack of time to test and implement them.
Wrote out html for questions
Wrote out css design for buttons
Wrote out small animation details for buttons
Created game logo
I also attended to test out the display during class time on Tuesday.
Brice Valure (bjv24)
Visited the display on Sunday to coordinate certain tasks with group and test out display
Created the visuals and logic for the timer that is shown during the question and answer phases of the application
Began creating quit button before we decided that walking away is a better way to implement a quit option for the user
Created 10 new landmark questions and 10 new map questions to add more variety and am in process of writing HTML for each of them
Discussed implementation of several features/stages of application with group, including how to format these on the display


