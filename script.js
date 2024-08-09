const possibleReplies = [
  "It is certain",
  "It is decidedly so",
  
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy",
  "try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  ]


function getEightBallMessage() {
  let messagesSize = possibleReplies.length;
  let randomNumber = Math.floor(Math.random() * messagesSize);
  return possibleReplies[randomNumber];
}

function changeMessage() {
  let eightEl = document.getElementById('eight');
  eightEl.textContent = "";
  
  let answerEl = document.getElementById('answer');
  answerEl.textContent = getEightBallMessage();
}

let buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', changeMessage);

var howTo = "1. Ask a Yes-or-No Question: Think of a question you want answered.\n" +
          "2. Make sure it's something that can be answered with Yes or No or another simple response.\n" +
          "3. Shake the Magic 8-Ball: Grab the Magic 8-Ball and give it a good shake. This mixes up the inside of the ball where the answer will come from.\n" +
          "4. Look through the answer window on top of the 8-ball to see the answer that appears.\n" +
          "5. Read the Answer: The Magic 8-Ball will show a response through the window.\n" +
          "6. REMEMBER THE 8-BALL IS ALWAYS RIGHT!!";

let howToButton = document.getElementById('howTo');

function createHowToWindow() {
  alert(howTo);
}
howToButton.addEventListener('click', createHowToWindow);