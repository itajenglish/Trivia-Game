$(document).ready(function() {
  console.log('Script Loaded!');

  // Counter to repsent each answers arry in the questions object.
  var counter = 0;
  var score = 0;
  var findAnswers;

  var questions = [{
    question: ["Who did the 1st A-Team movie come out?"],
    answers: ["2016", "2007", '2010', '2008'],
    correctA: "2010"
  }, {
    question: ["Who stars in the transporter?"],
    answers: ["John Wayne", "Jason Statham", 'Sean Connery', 'Douglas Fairbanks'],
    correctA: "Jason Statham"
  }, {
    question: ["What was the 1st James Bond Movie?"],
    answers: ["From Russia with Love", "Goldfinger", 'Thunderball', 'Dr. No'],
    correctA: "Dr. No"
  }, {
    question: ["Who is the star in Jack Reacher?"],
    answers: ["Tom Cruise", "Adolphe Menjou", 'Alain Delon', 'Alan Ladd'],
    correctA: "Tom Cruise"
  }, {
    question: ["What year was Cowboys & Aliens filmed?"],
    answers: ["2013", "2011", '2009', '.2010'],
    correctA: "2011"
  }, {
    question: ["Who was the social network based on?"],
    answers: ["Bill Gates", "Mark Zuckerberg", 'Elon Musk', 'Steve Jobs'],
    correctA: "Mark Zuckerberg"
  }, {
    question: ["What company was The Intern based on?"],
    answers: ["Facebook", "Google", 'Microsoft', 'General Assembly'],
    correctA: "Google"
  }, {
    question: ["When was the 1st Fast n Furious created?"],
    answers: ["2001", "2003", '2006', '2015'],
    correctA: "2001"
  }, {
    question: ["What car was Paul Walker most known for driving in Fast n Furious?"],
    answers: ["Elipse", "GTR", 'Mustang', 'BMW'],
    correctA: "GTR"
  }, {
    question: ["What year did the last karate kid come out?"],
    answers: ["2013", "2012", '2010', '2008'],
    correctA: "2010"
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

      // If counter is equal to 0 stop Timer and sound.
      if (time === 0 || pause === true) {
         clearInterval(gameTimer);
         $('body').remove('<audio src="sounds/Beep_Sound.wav" autoplay></audio>');
         checkScore();
        console.log('Timer has ended!');
      }

      //Activates Timmer Flash and sound below 20sec
      if(time <= 20){
        $('.timeWrapper').css('animation', 'flashRed .500s infinite');
        $('body').append('<audio src="sounds/Beep_Sound.wav" autoplay></audio>');
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
