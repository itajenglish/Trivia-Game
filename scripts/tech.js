$(document).ready(function() {
  console.log('Script Loaded!');

  // Counter to repsent each answers arry in the questions object.
  var counter = 1;

  var questions = [{
  question: "What does [ ] repsent in javascript?",
    answers: ["object", "array", 'arguments', 'undefined']
  },{
    question: "What  will this problem return? var f = 32; typeof x;",
    answers: ["number", "undefined", 'function', 'Error']
  },{
    question: "Who made apple?",
    answers: ["Steve Jobs", "Bill Gates", 'Elon Musk', 'Taj English']
  },{
    question: "When was uber founded?",
    answers: ["2003", "2009", '2012', '2020']
  },{
    question: "How do you invoke a function?",
    answers: ["function()", "func", 'invokeFunction', '.function']
  },{
    question: "What does {} repsent in javascript?",
    answers: ["object", "array", 'arguments', 'undefined']
  },{
    question: "What will var x = 5 + x; return?",
    answers: ["5", "undefined", 'NaN', 'Error']
  },{
    question: "What is node?",
    answers: ["Framework", "Compiler", 'Language', 'Run Time']
  },{
    question: "When was the 1st iPhone created",
    answers: ["2007", "2004", '2002', '2008']
  },{
    question: "How long did it take to create the 1st version of javascript",
    answers: ["5 days", "10 days", '10 weeks', '1 year']
  },];


var $changeBtn = $('#changeBtn');
  $changeBtn.click(function(event) {
    changeQ();
    counter++;
    console.log('clicked Me!');
  });

// populates dom on page load.
function populateDom(){
  $('#question').text(questions[0].question);
  for (var i = 0; i < questions[0].answers.length; i++){
    var populateButtons = $('#answerBtn a')[i];
    $(populateButtons).text(questions[0].answers[i]);
}
  }
  // populates dom when change question button is clicked.
  function changeQ(){
    for (var i = 0; i < questions[counter].question; i++){
    var populateQuestions = $('#question')[i];
    $(populateQuestions).text(questions[counter].question[i]);

}

    //   for (var i = 0; i < questions[counter].answers.length; i++){
    //   var populateButtons = $('#answerBtn a')[i];
    //   $(populateButtons).text(questions[counter].answers[i]);
    //
    // }
}
populateDom();



});
