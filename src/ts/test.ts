interface Question {
  question: string;
  choices: string[];
  correctAnswer: number;
}
 
const questions: Question[] = [
  {
    question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
    choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
    correctAnswer: 0,
  },
  {
    question: 'Which method is used to add one or more elements to the end of an array?',
    choices: ['push()', 'join()', 'slice()', 'concat()'],
    correctAnswer: 0,
  },
  {
    question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
    choices: ['"327"', '"12"', '"57"', '"NaN"'],
    correctAnswer: 2,
  },
  {
    question: 'What is the purpose of the "use strict" directive in JavaScript?',
    choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
    correctAnswer: 2,
  },
  {
    question: 'What is the scope of a variable declared with the "let" keyword?',
    choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
    correctAnswer: 2,
  },
  {
    question: 'Which higher-order function is used to transform elements of an array into a single value?',
    choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
    correctAnswer: 2,
  },
  {
    question: 'What does the "=== " operator in JavaScript check for?',
    choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
    correctAnswer: 1,
  },
  {
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
    correctAnswer: 3,
  },
  {
    question: 'What does the "NaN" value represent in JavaScript?',
    choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
    correctAnswer: 0,
  },
  {
    question: 'Which method is used to remove the last element from an array?',
    choices: ['pop()', 'shift()', 'slice()', 'splice()'],
    correctAnswer: 0,
  },
];

const div = document.getElementById("ex2");
const scoreText = document.createElement("p");
let score = 0;
scoreText.innerText = "Current Score: " + score + "/10";

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];

  // question
  const ques = document.createElement("p");
  ques.innerText = question.question;

  scoreText.appendChild(ques);

  // // radio old
  // for (const choice of question.choices) {
  //   const div = document.createElement("div");
  //   const radio = document.createElement("input");
  //   const span = document.createElement("span");
  //   radio.type = "radio";
  //   radio.name = "select";
  //   span.innerText = choice;
  //   div.appendChild(radio);
  //   div.appendChild(span);
  //   scoreText.appendChild(div);
  // }

    // radio new
    for (const choice of question.choices) {
      const div = document.createElement("div");
      const radio = document.createElement("input");
      const span = document.createElement("span");
      radio.type = "radio";
      radio.name = "question" + i; // Set the name based on the question index
      span.innerText = choice;
      div.appendChild(radio);
      div.appendChild(span);
      scoreText.appendChild(div);
    }

  // button
  const button = document.createElement("button");
  button.textContent = "Submit";
  scoreText.appendChild(button);

  button.addEventListener("click", function () {
    const selectedRadio = document.querySelector(`input[name=question${i}]:checked`) as HTMLInputElement;
    console.log(selectedRadio);
    // check score
    if (selectedRadio) {
      const selectedAnswerIndex = parseInt(selectedRadio.value);
      console.log(selectedAnswerIndex);
      if (selectedAnswerIndex === question.correctAnswer) {
        score++;
        scoreText.textContent = `Current Score: ${score}/10`;
        resultText.textContent = "Correct!";
      } else {
        resultText.textContent = "Incorrect!";
      }
      button.disabled = true; // ปิดการใช้งานปุ่ม Submit
    } else {
      resultText.textContent = "Please choose an answer!";
    }
    
  });
  const resultText = document.createElement("p");
  scoreText.appendChild(resultText);
  


}
div?.appendChild(scoreText);

export {};