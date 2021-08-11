'use strict';

//alert('Hello!');

let userName = prompt('Hello user, what is your name?');
console.log(userName);
alert('Hello ' + userName + ' thanks for coming to learn more about Zack!');

let answer1= prompt('Do you think Zack likes ice cream ' + userName + '?');
console.log(answer1);
let answer1Lower = answer1.toLowerCase();

if(answer1Lower === 'yes' || answer1Lower === 'y'){
  alert('Thats correct Zack loves ice cream!');
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
 }else if(answer4Lower === 'yes' || answer4Lower === 'y'){
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
 }
 else if(answer5Lower === 'no' || answer5Lower === 'n'){
  alert('You are wrong')
  }
  else{
    alert('Come on you should know better! Everyone loves learning!');
}

alert(userName + ' thanks for coming to learn more about Zack, feel free to stick around and read as much as you like!');