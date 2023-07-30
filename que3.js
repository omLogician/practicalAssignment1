const readline = require('readline');
const chatBot = require('./public/chatbot.js');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(){
  r1.question('YOU ', (userInput)=>{
    if(userInput.toLowerCase() === 'exit'){
      r1.close();
      return;
    }
    const response = chatBot.UserInput(userInput);
    console.log(response);
    promptUser();
  })
}

console.log('Chat Bot : HELLO I AM YOUR CHATBOT');
console.log('Chat Bot: Type "exit" to end the conversation.');
promptUser();