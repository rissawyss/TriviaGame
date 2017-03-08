# HW5 – {Trivia Game}
Homework week 5 for UCLA Coding BootCamp.
This assignment is a Trivia Game, in which one question is displayed until the player answers it or their time runs out.

## Game Description and Requirements
* If the player selects the correct answer, a screen congratulating them for choosing the right option. After a few seconds, display the next question.

* If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game.

## Technologies Used
	-HTML
	-CSS
	-BOOTSTRAP
	-JAVASCRIPT
	-jQUERY

-------------

## CODE EXPLANATION

### ARRAY OF OBJECTS

	-An array of objects called myQuestions was created for each question, complete with key value properties to store the following:
  		-Each question
  		-Each answer
		-The correct answer
		-Image source of the correct answer

	-The displayTrivia function iterated over the myQuestions array of objects to display each question and answer in order.


### SET TIMEOUT and SET INTERVAL
	-The setTimeout method allowed the questions to be displayed for a set period of time until the clearTimeout() method is called.

	-The setInterval method allowed the questions to continue being displayed until the clearInterval() method is called.

	-The THIS method was used in the click event listener to determine whether question answered was correct or incorrect.


### RESTART GAME (example)
I created a function to restart the game by cloning the original triviaSection div to be used after the initial game ends and score results are displayed.
Opening message is displayed, gameOver is reset to false, and the showTrivia function runs.

```

function restartTrivia() {
  $("#newTrivia").replaceWith(originalState.clone());
  $("#answerSection").empty();
  showOpeningMessage();
  gameOver = false;
  showTrivia = setInterval(nextQuestion, 15000);
  count = -1;

}

```