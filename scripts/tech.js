$(document).ready(function() {
  console.log('Script Loaded!');

  // Counter to repsent each answers arry in the questions object.
  var counter = 1;

  var questions = [{
    question: ["What does [ ] repsent in javascript?"],
    answers: ["object", "array", 'arguments', 'undefined'],
    correctA: "object"
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
    question: ["What does {} repsent in javascript?"],
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
  var $Time = $('#playerTime');

  var $changeBtn = $('#changeBtn');
      $changeBtn.hide();

  $changeBtn.click(function(event) {
    changeQ();
    counter++;
    console.log('clicked Me!');
  });

  var $startGameBtn = $('#startGameBtn').click(function(event) {
    $startGameBtn.hide('slow/400/fast', function() {});
    $changeBtn.show('slow/400/fast', function() {});
    $questionText.show('slow/400/fast', function() {});
    $answerButtons.show('slow/400/fast', function() {});
    Timer();

    });
  // populates dom on page load.
  function populateDom() {
    $('#question').text(questions[0].question);
    for (var i = 0; i < questions[0].answers.length; i++) {
      var populateButtons = $('#answerBtn a')[i];
      $(populateButtons).text(questions[0].answers[i]);
    }
  }
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


  }
    populateDom();
    function Timer(){
      var counter = 60;

      setInterval(function(){
        counter --;
        $Time.text(counter);
        console.log(counter);
      },1000);
    }
});
