import "./ex2-1.js";
const E = [
    {
        question: `What is the output of the following code?\n\nconsole.log(typeof null);`,
        choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correctAnswer: 0,
    },
    {
        question: "Which method is used to add one or more elements to the end of an array?",
        choices: ["push()", "join()", "slice()", "concat()"],
        correctAnswer: 0,
    },
    {
        question: `What is the result of the following expression?\n\n3 + 2 + "7"`,
        choices: ['"327"', '"12"', '"57"', '"NaN"'],
        correctAnswer: 2,
    },
    {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        choices: ["Enforce stricter type checking", "Enable the use of modern syntax", "Enable strict mode for improved error handling", "Disable certain features for better performance"],
        correctAnswer: 2,
    },
    {
        question: 'What is the scope of a variable declared with the "let" keyword?',
        choices: ["Function scope", "Global scope", "Block scope", "Module scope"],
        correctAnswer: 2,
    },
    {
        question: "Which higher-order function is used to transform elements of an array into a single value?",
        choices: ["map()", "filter()", "reduce()", "forEach()"],
        correctAnswer: 2,
    },
    {
        question: 'What does the "=== " operator in JavaScript check for?',
        choices: ["Equality of values", "Equality of values and types", "Inequality of values", "Reference equality"],
        correctAnswer: 1,
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        choices: ["Refer to the current function", "Refer to the parent function", "Refer to the global object", "Refer to the object that owns the current code"],
        correctAnswer: 3,
    },
    {
        question: 'What does the "NaN" value represent in JavaScript?',
        choices: ["Not a Number", "Null", "Negative Number", "Not Applicable"],
        correctAnswer: 0,
    },
    {
        question: "Which method is used to remove the last element from an array?",
        choices: ["pop()", "shift()", "slice()", "splice()"],
        correctAnswer: 0,
    },
];

const exercise2 = document.getElementById("exercise2");

if (exercise2) {
    let score = 0;
    const scoreDiv = document.createElement("div");
    scoreDiv.innerText = `Current Score: ${score}/10`;
    exercise2.appendChild(scoreDiv);

    E.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        const questionText = document.createElement("p");
        questionText.innerText = question.question;
        questionDiv.appendChild(questionText);

        const choicesDiv = document.createElement("div");
        question.choices.forEach((choice, choiceIndex) => {
            const choiceLabel = document.createElement("label");
            const choiceInput = document.createElement("input");
            choiceInput.type = "radio";
            choiceInput.name = `question${index}`;
            const choiceSpan = document.createElement("span");
            choiceSpan.innerText = choice;

            choiceLabel.appendChild(choiceInput);
            choiceLabel.appendChild(choiceSpan);
            choicesDiv.appendChild(choiceLabel);

            // เมื่อกดปุ่ม Submit ให้ตรวจสอบคำตอบ
            choiceInput.addEventListener("change", () => {
                if (choiceIndex === question.correctAnswer) {
                    score++; // เพิ่มคะแนน
                    scoreDiv.innerText = `Current Score: ${score}/10`;
                }
            });
        });
        questionDiv.appendChild(choicesDiv);

        const submitButton = document.createElement("button");
        submitButton.innerText = "Submit";
        submitButton.addEventListener("click", () => {
            const selectedInput = questionDiv.querySelector("input:checked");
            if (!selectedInput) {
                console.log("Please choose an answer first!");
                return;
            }
            for (const input of choicesDiv.querySelectorAll("input")) {
                input.disabled = true;
            }
            submitButton.disabled = true;
            const selectedAnswer = question.choices.indexOf(selectedInput.nextElementSibling.innerText);
            if (selectedAnswer === question.correctAnswer) {
                console.log("Correct!");
                score++;
                scoreDiv.innerText = `Current Score: ${score}/10`;
            } else {
                console.log("Incorrect!");
            }
        });
        questionDiv.appendChild(submitButton);

        const resultText = document.createElement("p");
        questionDiv.appendChild(resultText);

        exercise2.appendChild(questionDiv);
    });
}
