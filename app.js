var readlineSync = require('readline-sync');
var userName = readlineSync.question("Enter your name: ");
console.log("------Welcome to the Avengers Quiz------\n");
console.log("Prove that you are an Avenger fan by selecting the correct option\n");
var score = 0;

//play function
function quiz(question,answer){
    
    var userAns = readlineSync.question(question);
    if(userAns===answer){
        console.log("\nBravo Right Answer");
        score = score + 1;
    }else{
        console.log("\nOops Wrong Answer");

    }
    console.log("Score:" + " " + score);
}

// Creating Array of Objects consisting of questions
var quizQues = [
    quesOne = {
        question:'\nWho is the leader of S.H.I.E.L.D?\na.Nick Fury\nb.Tony Stark\n',
        answer:'a'
    },
    quesTwo = {
      question:"\nWhat is Clint Barton's superhero name?\na.Black Panther\nb.Hawkeye\n",
      answer:'b'  
      
    },
    quesThree = {
      question:'\nIn which US city do the Avengers battle the Chitauri?\na.New York\nb.Miami\n',
        answer:'a'
    },
    quesFour = {
      question:'\nWho is Steve Rogers’ best friend?\na. Bruce Banner\nb.Bucky Barnes\n'
    }
]

// For loop to access the questions 
for(var i=0 ; i< quizQues.length; i++){
   var finalAns = quizQues[i];
   quiz(finalAns.question,finalAns.answer);
}

console.log(userName + " your final score is: " + score);