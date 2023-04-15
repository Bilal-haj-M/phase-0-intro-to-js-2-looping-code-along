// Code your solutions in this file

function writeCards(name, eventName) {
  const messages = [];

  for (let i = 0; i < name.length; i++) {
   const message = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`
   messages.push(message)
  }
return messages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
} 