'use strict';

var userScore = 0;

let userName = prompt('Hello user, what is your name?');
console.log(userName);
alert('Hello ' + userName + ' thanks for coming to learn more about Zack!');

let answer1= prompt('Do you think Zack likes ice cream ' + userName + '?');
console.log(answer1);
let answer1Lower = answer1.toLowerCase();

if(answer1Lower === 'yes' || answer1Lower === 'y'){
  alert('Thats correct Zack loves ice cream!');
  userScore++;
  }
  else if(answer1Lower === 'no' || answer1Lower === 'n'){
    alert('You are wrong')
  }
  else{
    alert('Come on you should know better! Everyone loves ice cream!');
}

let answer2 = prompt('Do you think Zack likes sitting inside all day ' + userName + '?');
console.log(answer2);
let answer2Lower = answer2.toLowerCase();

if(answer2Lower === 'no' || answer2Lower === 'n'){
  alert('Thats correct Zack hates sitting inside all day!');
  userScore++;
  }
 else if(answer2Lower === 'yes' || answer2Lower === 'y'){
  alert('You are wrong')
  }
  else{
    alert('Come on you should know better! Everyone loves the great outdoors!');
} 

let answer3= prompt('Do you think Zack likes long walks on the beach ' + userName + '?');
console.log(answer3);
let answer3Lower = answer3.toLowerCase();

if(answer3Lower === 'yes' || answer3Lower === 'y'){
  alert('Thats correct Zack loves long walks on the beach!');
  userScore++;
 }
 else if(answer3Lower === 'no' || answer3Lower === 'n'){
  alert('You are wrong')
  }
  else{
    alert('Come on you should know better! Everyone loves the sand between their toes!');
}

let answer4 = prompt('Do you think Zack likes getting stung by bees ' + userName + '?');
console.log(answer4);
let answer4Lower = answer4.toLowerCase();

if(answer4Lower === 'no' || answer4Lower === 'n'){
  alert('Thats correct Zack does not like getting stung! Come no now who does?');
  userScore++;
 }
 else if(answer4Lower === 'yes' || answer4Lower === 'y'){
  alert('You are wrong')
  }
  else{
    alert('Come on you should know better! No one likes bee stings!');
} 

let answer5= prompt('Do you think Zack is looking forward to his time with the Code Fellows ' + userName + '?');
console.log(answer5);
let answer5Lower = answer5.toLowerCase();

if(answer5Lower === 'yes' || answer5Lower === 'y'){
  alert('Thats correct Zack is very much looking forward to all he is going to learn!');
  userScore++;
 }
 else if(answer5Lower === 'no' || answer5Lower === 'n'){
  alert('You are wrong')
  }
  else{
    alert('Come on you should know better! Everyone loves learning!');
}

var number = 5;
var answer = false;


for(var i = 0; i < 4; i++){
  var numGuess = prompt('Please guess a number between 1 and 20!');
  console.log(numGuess);
  //checks that number is within range
  while(numGuess < 1 || numGuess > 20){
    var numGuess = prompt('That number was out of range, please pick a number between 1 and 20:');
    console.log(numGuess);
  }

  if(numGuess < number){
    alert('Your guess was too low!');
  }
  if(numGuess > number){
    alert('your guess was too high!');
  }
  //check if the answer matches the guess and switches statement to true to exit loop
  if(number == numGuess){
    alert('You are correct the answer was five!');
    var answer = true;
    userScore++;
   break;
  }
}
if(answer == false){
alert('sorry you did not get the answer, it was five.')
}

const favFoods = ["pizza", "hamburger", "ice cream"];
console.log(favFoods);
var foodAns = false;

for(var j = 0; j < 6; j++){

  var foodGuess = prompt('What do you think is Zacks favorite food?');
  var foodGuessLower = foodGuess.toLowerCase();
  console.log(foodGuessLower);

  for(var i = 0; i < favFoods.length; i++){

    if(favFoods[i] === foodGuessLower){
      alert('Congrats you guessed zacks favorite food!');
      foodAns = true;
      userScore++;
      break;
    }
  }
  if(foodAns === true){
    break;
  }
  if(foodAns === false){
  alert('That was an incorrect guess, guess again.');
  }
}

alert('these are zacks favorite foods:');

for(var i = 0; i < favFoods.length; i++){
  alert(favFoods[i]);
}

alert(userName + ' thanks for coming to learn more about Zack. Your Zack score was ' + userScore + '/7. feel free to stick around and read as much as you like!');