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



  

const exercise2 = document.getElementById("ex2");

if (exercise2) {
  let score: number = 0;
  const scoreDiv = document.createElement("p");
  scoreDiv.textContent = "Current Score: " + score + "/10";
  exercise2.appendChild(scoreDiv);


  
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    // console.log(questions[i].choices[0]);
    let j = 0;
    const questionDiv = document.createElement("p");
    const questionText = document.createElement("p");
    questionText.innerText = question.question;
    questionDiv.appendChild(questionText);



    const choicesDiv = document.createElement("p");
    for (let choiceIndex = 0; choiceIndex < question.choices.length; choiceIndex++) {
        const choice = question.choices[choiceIndex];
          
        const choiceLabel = document.createElement("label");
        const choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = `question${i}`;
        choiceInput.value = choiceIndex.toString(); // เปลี่ยนจาก j เป็น choiceIndex
        const choiceSpan = document.createElement("span");
        choiceSpan.textContent = choice;
        const br = document.createElement("br");
      
        choiceLabel.appendChild(choiceInput);
        choiceLabel.appendChild(choiceSpan);
        choiceLabel.appendChild(br);
        choicesDiv.appendChild(choiceLabel);
        // console.log(choiceInput.value);
      }
    questionDiv.appendChild(choicesDiv);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    questionDiv.appendChild(submitButton);

    
    submitButton.addEventListener("click", () => {
        const selectedAnswer = document.querySelector(`input[name=question${i}]:checked`) as HTMLInputElement;
        if (selectedAnswer) {
          const selectedAnswerIndex = parseInt(selectedAnswer.value);
          console.log(selectedAnswerIndex);
          if (selectedAnswerIndex === question.correctAnswer) {
            score++;
            scoreDiv.textContent = `Current Score: ${score}/10`;
            resultText.textContent = "Correct!";
          } else {
            resultText.textContent = "Incorrect!";
          }
          submitButton.disabled = true; // ปิดการใช้งานปุ่ม Submit
        } else {
          resultText.textContent = "Please choose an answer!";
        }
      });
      
    const resultText = document.createElement("p");
    questionDiv.appendChild(resultText);

    exercise2.appendChild(questionDiv);
  }
}
