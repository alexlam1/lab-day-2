//'use strict';
var user = prompt('What is your Jedi name?');
console.log('user:' + user);

alert('greetings padawan ' + user + ', I\'m thinking of a number 1-4, use the force and tell me what that number is');
var answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
for (i = 0; i < 5; i++) {
  console.log('user\'s answer:' + answer);
  if (answer === '4') {
    alert('Yay good job! You read my mind!');
    break;
  } else {
    alert('try again, and may the force be with you');
    answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
  }
}

var question1 = prompt('do you practice the dark side? Yes or no');
console.log('question1:' + question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y')
  {
  alert('Dark powers are with you')
  //console.log('question1')
} else {
  alert('Bright! Your path is enlightened')
}

var question2 = prompt(user + ', lets find out more about you, Do you practice the force on earth?');
console.log('question2:' + question2);

if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y')
{
  alert('you are in violation of Earths laws REPORTED TO JEDI SECTOR')
} else {
  alert('Good Jedi do well and good will come in return')
}
