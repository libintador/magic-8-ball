$(document).ready(function () {

  $("#answer").hide();

  var magic8Ball = {};

  magic8Ball.listOfAnswers = [
    "As I see it, yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "It is certain",
    "It is decidedly so",
    "Most likely",
    "My reply is no",
    "My sources say no",
    "Outlook good",
    "Outlook not so good",
    "Reply hazy, try again",
    "Signs point to yes",
    "Very doubtful",
    "Without a doubt",
    "Yes",
    "Yes, definitely",
    "You may rely on it"
  ];

  $("#answer").hide();

  //to define the method
  magic8Ball.askQuestion = function (question) {

    randomNumber = Math.random();
    randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    randomIndex = Math.floor(randomNumberForListOfAnswers);
    answer = this.listOfAnswers[randomIndex];

    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
    );

    $("#answer").fadeIn(4000);

    $("#answer").text( answer );

  };

  var onClick = function () {

    $("#answer").hide();

    $("#8ball").attr(
    "src",
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png"
  );

    $("#8ball").effect( "shake" );

    //wait half a second before showing prompt
    setTimeout(function () {

      var question = prompt("Ask a YES or NO question.");
      magic8Ball.askQuestion(question);

    }, 500);

  };

  $("#questionButton").click(onClick);

});
