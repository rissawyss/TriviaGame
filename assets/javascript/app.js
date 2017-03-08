$(document).ready(function() {


var myQuestions = [
      //Question 1
      {
        ques: "What vitamin is produced when a person is exposed to sunlight?",
        answerA: "Vitamin E",
        answerB: "Vitamin D",
        answerC: "Calcium",
        answerD: "B12",
        theCorrectAnswer: "answerB",
        answerImage: '<img class="img-responsive" src="assets/images/vitaminD.jpeg">'
      },
      //Question 2
      {
        ques: "The Simpsons first debuted as a short in what American variety television show?",
        answerA: "Circus Time",
        answerB: "The Jay Leno Show",
        answerC: "The Tracy Ullman Show",
        answerD: "The Judy Garland Show",
        theCorrectAnswer: "answerC",
        answerImage: '<img class="img-responsive" src="assets/images/simpsons.jpg">'
      },
      //Question 3
      {
        ques: "What is the most popular breed of dog in the United States?",
        answerA: "Labrador Retriever",
        answerB: "Beagle",
        answerC: "German Shepherd",
        answerD: "Golden Retriever",
        theCorrectAnswer: "answerA",
        answerImage: '<img class="img-responsive" src="assets/images/labradorretriever.jpg">'
      },
      //Question 4
      {
        ques: "What are the five boroughs of New York City?",
        answerA: "The Bronx, Coney Island, Brooklyn, Westchester, Harlem",
        answerB: "Greenwich Village, Chelsea, Manhattan, Williamsburg, Astoria",
        answerC: "Chinatown, Washington Heights, the Bronx, Manhattan, Brooklyn",
        answerD: "Manhattan, the Bronx, Queens, Brooklyn, Staten Island",
        theCorrectAnswer: "answerD",
        answerImage: '<img class="img-responsive" src="assets/images/NYC-boroughs.png">'
      },
      //Question 5
      {
        ques: "What are the names of the two actors whose characters get stuck traveling together in the movie 'Trains Planes & Automobiles'?",
        answerA: "Steve Martin & Martin Short",
        answerB: "Steve Martin & Rick Moranis",
        answerC: "Steve Martin & John Candy",
        answerD: "Steve Martin & Chevy Chase",
        theCorrectAnswer: "answerC",
        answerImage: '<img class="img-responsive" src="assets/images/stevemartinjohncandy.jpg">'
      },
      //Question 6
      {
        ques: "In what year did Nintendo release its first game console in North America?",
        answerA: "1985",
        answerB: "1983",
        answerC: "1987",
        answerD: "1980",
        theCorrectAnswer: "answerA",
        answerImage: '<img class="img-responsive" src="assets/images/NES-Console-Set.jpg">'
      },
      //Question 7
      {
        ques: "What is the largest internal organ of the human body?",
        answerA: "Pancreas",
        answerB: "Liver",
        answerC: "Lungs",
        answerD: "Large Intestine",
        theCorrectAnswer: "answerB",
        answerImage: '<img class="img-responsive" src="assets/images/liver.jpg">'
      },
      //Question 8
      {
        ques: "Who came up with the three laws of motion?",
        answerA: "Albert Einstein",
        answerB: "Charles Darwin",
        answerC: "Stephen Hawking",
        answerD: "Sir Isaac Newton",
        theCorrectAnswer: "answerD",
        answerImage: '<img class="img-responsive" src="assets/images/newton5.jpg">'
      }
    ];

var originalState = $("#triviaQuestionSection").clone();

var count;

var gameOver = false;

var showTrivia;

//var score = 0;

var correctAnswerArray = [];

$("#start").click(startTrivia);
$("#start").click(showOpeningMessage);
$("#restart").click(restartTrivia);


//==============================================

var displayTrivia = function() {
        //Iterate through Object and display Question and Each Answer in a div
        var displayQues = $("<div>").html(myQuestions[count].ques);
        $("#question").append(displayQues);
        var displayAnswerA = $("<div>").html(myQuestions[count].answerA);
        $("#answerA").append(displayAnswerA);
        var displayAnswerB = $("<div>").html(myQuestions[count].answerB);
        $("#answerB").append(displayAnswerB);
        var displayAnswerC = $("<div>").html(myQuestions[count].answerC);
        $("#answerC").append(displayAnswerC);
        var displayAnswerD = $("<div>").html(myQuestions[count].answerD);
        $("#answerD").append(displayAnswerD);
        //Click event listener: When user clicks answer, check if div id is equal to the correct answer.
        $('.list-group-item').click(function(){
          var checkAnswer = $(this).attr('id');
          if (checkAnswer === myQuestions[count].theCorrectAnswer) {
        //If correct answer selected, a "Correct!" message and the answer image are displayed.
            $("#answerStatus").html('<div class="col-md-4 col-md-offset-4"><h3> CORRECT! </h3></div>');
            $("#welcome").html(myQuestions[count].answerImage);
        //Push correct answer index into an array
              correctAnswerArray.push(count);
        //If wrong answer selected, a "Wrong!" message and the answer image are displayed.
          } else {
            $("#answerStatus").html('<h3> WRONG! </h3>');
            $("#welcome").html(myQuestions[count].answerImage);
           }
        });
};

//==============================================

function countdown() {
    // your code goes here
    var num = 15;
    var timerId = setInterval(function() {
        num--;
        console.log(num);
        $("#timer").html('<h4>' + "TIME LEFT: " + num + '</h4>');

        if(gameOver === true) {
            clearInterval(timerId);
            clearTimeout(timerId);
            $("#timer").empty();
        } else  if (num === 0) {
          num = 15;
        }
    }, 1000);
}

//==============================================


function nextQuestion() {
  countdown();
  $("#welcome").empty();
  $("#answerStatus").empty();
  count++;
  

  //A setTimeout to run displayTrivia after 1 second.
  setTimeout(displayTrivia, 1000);
  $("#question").empty();
  $("#answerA").empty();
  $("#answerB").empty();
  $("#answerC").empty();
  $("#answerD").empty();

  //If the count is the same as the length of the myQuestions array, gameOver = true, clear the Interval to stop game question display and show results.
  if (count === myQuestions.length) {
    gameOver = true;
    clearInterval(showTrivia);
    clearTimeout(displayTrivia);
    $("#triviaQuestionSection").empty();
    count = 0;
    unique(correctAnswerArray);
    var correctAnswers = unique(correctAnswerArray);
    displayAnswers(correctAnswers);
    }
  }

//==============================================
//Function to eliminate duplicates from corrected Answers array and show unique answer indices
function unique(list) {
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}

//==============================================
//Display answers showing length of correctly answered questions array
var displayAnswers = function(ans) {
  console.log(ans);
  console.log(ans.length);
  $("#answerSection").html('<h3>' +"YOU ANSWERED " + ans.length + " OUT OF 8 QUESTIONS CORRECTLY!" + '</h3>');
  for (i = 0; i++; i < ans.length) {
    $("#answerSection").html('<h4>' +"QUESTION: " + myQuestions[ans[i]].ques + '</h4>');
    console.log(myQuestions[ans[i]].ques);
  }
};

//==============================================

function showOpeningMessage() {
  $("#welcome").append('<h3> "Welcome to All Out Trivia! You will have 15 seconds to answer each question on a variety of topics. The Game Will begin Shortly. Good luck!!" </h3>');
}

//==============================================

function startTrivia() {
  showTrivia = setInterval(nextQuestion, 15000);
  count = -1;

}

//==============================================

function restartTrivia() {
  $("#newTrivia").replaceWith(originalState.clone());
  $("#answerSection").empty();
  showOpeningMessage();
  gameOver = false;
  showTrivia = setInterval(nextQuestion, 15000);
  count = -1;

}

//==============================================


});
