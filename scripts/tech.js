$(document).ready(function() {
  console.log('Script Loaded!');

  // Counter to repsent each answers arry in the questions object.
  var counter = 0;
  var score = 0;
  var findAnswers;

  var questions = [{
    question: ["What does [ ] represent in javascript?"],
    answers: ["object", "array", 'arguments', 'undefined'],
    correctA: "array"
  }, {
    question: ["What  will this problem return? var f = 32; typeof x;"],
    answers: ["number", "undefined", 'function', 'Error'],
    correctA: "undefined"
  }, {
    question: ["Who made apple?"],
    answers: ["Steve Jobs", "Bill Gates", 'Elon Musk', 'Taj English'],
    correctA: "Steve Jobs"
  }, {
    question: ["When was uber founded?"],
    answers: ["2003", "2009", '2012', '2020'],
    correctA: "2009"
  }, {
    question: ["How do you invoke a function?"],
    answers: ["function()", "func", 'invokeFunction', '.function'],
    correctA: "function()"
  }, {
    question: ["What does { } repsent in javascript?"],
    answers: ["object", "array", 'arguments', 'undefined'],
    correctA: "object"
  }, {
    question: ["What will var x = 5 + x; return?"],
    answers: ["5", "undefined", 'NaN', 'Error'],
    correctA: "NaN"
  }, {
    question: ["What is node?"],
    answers: ["Framework", "Compiler", 'Language', 'Run Time'],
    correctA: "Run Time"
  }, {
    question: ["When was the 1st iPhone created"],
    answers: ["2007", "2004", '2002', '2008'],
    correctA: "2007"
  }, {
    question: ["How long did it take to create the 1st version of javascript"],
    answers: ["5 days", "10 days", '10 weeks', '1 year'],
    correctA: "5 days"
  }, ];

  var $questionText = $('#question').hide();
  var $answerButtons = $('#answerBtn').hide();
  var $instructions = $('#instructions');
  var $questionLeftWrapper = $('#questionLeftWrapper').hide();
  var $Time = $('#playerTime');

  var $changeBtn = $('#changeBtn');
  $changeBtn.hide();

  $changeBtn.click(function(event) {
    $('#answerBtn a').removeClass('btn-flat disabled').addClass('btn red waves-effect waves-light');
    counter++;
    gameEnd();
    changeQ();
    questionLeftUpdate();
    console.log('clicked Me!');
    console.log(counter);
  });

  var $startGameBtn = $('#startGameBtn').click(function(event) {
    $startGameBtn.hide('slow/400/fast', function() {});
    $instructions.hide('slow/400/fast', function() {});
    $changeBtn.show('slow/400/fast', function() {});
    $questionText.show('slow/400/fast', function() {});
    $answerButtons.show('slow/400/fast', function() {});
    $questionLeftWrapper.show('slow/400/fast', function() {});
    Timer();
  });
  // populates dom on page load.
  (function populateDom() {
    $('#questionLeftNumber').text("1");
    $('#question').text(questions[counter].question);
    for (var i = 0; i < questions[counter].answers.length; i++) {
      var populateButtons = $('#answerBtn a')[i];
      $(populateButtons).text(questions[counter].answers[i]);
    }
    findAnswers = questions[counter].correctA;
  })();

  // populates dom with question when change question button is clicked.
  function changeQ() {
    for (var i = 0; i < questions[counter].question.length; i++) {
      var populateQuestions = $('#question');
      $(populateQuestions).text(questions[counter].question[0]);
    }

    // populates dom with answers when change question button is clicked.
    for (var j = 0; j < questions[counter].answers.length; j++) {
      var populateButtons = $('#answerBtn a')[j];
      $(populateButtons).text(questions[counter].answers[j]);
    }

    findAnswers = questions[counter].correctA;
  }

  //Timer function is invoked when Start Game button is clicked.
  var pause = false;
  var Timer = function() {
    var time = 60;

    var gameTimer = setInterval(function() {
      time--;
      $Time.text(time);
      console.log(time);

      // If counter is equal to 0 stop Timer.
      if (time === 0 || pause === true) {
         clearInterval(gameTimer);
         checkScore();
        console.log('Timer has ended!');
      }

      //Activates Timmer Flash below 20sec
      if(time <= 20){
        $('.timeWrapper').css('animation', 'flashRed .500s infinite');
      }
    }, 1000);
  };

  //Adds 10 to the current score when its called.
  function scoreUpdate(){
    score += 10;
    $('#playerScore').text(score);
  }

  //Updates question left number
  function questionLeftUpdate(){
    $('#questionLeftNumber').text(counter + 1);
  }
  //onClick functions for game buttons.
  $('#0').click(function(event) {

    if ($('#0').text() === findAnswers){
      scoreUpdate();
      gameEnd();

      $('#answerBtn a').attr('class', 'btn-flat disabled');
      console.log(score);
    }else{
      $('#answerBtn a').attr('class', 'btn-flat disabled');
    }

  });

    $('#1').click(function(event){

      if ($('#1').text() === findAnswers){
        scoreUpdate();
        gameEnd();

        $('#answerBtn a').attr('class', 'btn-flat disabled');
        console.log(score);
      }else{
        $('#answerBtn a').attr('class', 'btn-flat disabled');

      }

    });

      $('#2').click(function(event) {

        if ($('#2').text() === findAnswers){
          scoreUpdate();
          gameEnd();

          $('#answerBtn a').attr('class', 'btn-flat disabled');
          console.log(score);
        }else{
          $('#answerBtn a').attr('class', 'btn-flat disabled');
        }

      });

        $('#3').click(function(event) {

          if ($('#3').text() === findAnswers){
            scoreUpdate();
            gameEnd();
            $('#answerBtn a').attr('class', 'btn-flat disabled');
            console.log(score);
          }else{
            $('#answerBtn a').attr('class', 'btn-flat disabled');
          }

        });
        //Checks to see if all the questions where answered correctly.
        function checkScore(){
          if($('#playerScore').text() >= 100){
            alert('You won!');
          }else if ($('#playerScore').text() < 100) {
            pause = true;
            alert('You lost!');
          }

        }
        // Ends game when questions end.
        function gameEnd(){
          if(counter > 9){
            $changeBtn.hide('slow/400/fast', function() {});
            $('#answerBtn a').attr('class', 'btn-flat disabled');
            pause = true;
            checkScore();
          }
        }
});
