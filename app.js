//'use strict';
var user = prompt('What is your Jedi name?');
console.log('user:' + user);

alert('greetings padawan ' + user + ', I\'m thinking of a number 1-4, use the force and tell me what that number is');
var answer = prompt(user + ', you may guess up to 4 times. Please use the force and focus!');
  for (i = 0; i < 4; i++) {
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

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y') {
  alert('Dark powers are with you');
} else {
  alert('Bright! Your path is enlightened');
}

var question2 = prompt(user + ', lets find out more about you, Do you practice the force on earth?');
console.log('question2:' + question2);

if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y') {
  alert('you are in violation of Earths laws REPORTED TO JEDI SECTOR');
} else {
  alert('Good Jedi do well and good will come in return');
}

var question3 = prompt(user + ',you are on the right path, would you train with Yoda?');
console.log('question3:' + question3);

if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y') {
  alert('Aha little did you know, Yoda I am');
} else {
  alert('Why then, Yoda will teach you not');
}

var question4 = prompt(user + ', what is your purpose for this test of force? are you looking to learn more about your powers');
console.log('question4:' + question4);

if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y') {
  alert('Well then I have the resources for you, email me and we will set you up with the light or dark side');
} else {
  alert('Then what IS your goal of this quiz???');
}

var question5 = prompt(user + ', Please refer us to your fellow Jedis, will you do this?');
console.log('question5:' + question5);

if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y') {
  alert('Thank you and may the force be with you');
} else {
  alert('Good luck in this world padawan');
}

// <ol> Top 10 Jedi Resources
//   <li> askyoda.com </li>
//   <li> usetheforce.com </li>
//   <li> thankluke.com </li>
//   <li> jedisunite.com </li>
//   <li> jedihotline.com </lil>
//   <li> weforce.com </li>
//   <li> jedeye.com </li>
//   <li> darkpowers.com </li>
//   <li> lightside.com </li>
//   <li> askvader.com </li>
//   <li> theempire </li>
// </ol>
