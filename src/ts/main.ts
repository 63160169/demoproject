// const divApp : HTMLDivElement = document.getElementById('app') as HTMLDivElement
// divApp.innerHTML = 'Hello World'

// const inputNumber: HTMLInputElement = document.getElementById('inputNumber') as HTMLInputElement;
// const plusButton = document.getElementById('plusButton') as HTMLButtonElement;
// const minusButton = document.getElementById('minusButton') as HTMLButtonElement;
// const multiplyButton = document.getElementById('multiplyButton') as HTMLButtonElement;
// const divideButton = document.getElementById('divideButton') as HTMLButtonElement;

// const output = document.getElementById('output') as HTMLElement;
// plusButton.addEventListener('click', function () {
//   const value: number = parseInt(inputNumber.value);
//   const result: number = value + 2;
//   output.innerText = result.toString();
// });

// minusButton.addEventListener('click', function () {
//   const value: number = parseInt(inputNumber.value);
//   const result: number = value - 2;
//   output.innerText = result.toString();
// });

// multiplyButton.addEventListener('click', function () {
//   const value: number = parseInt(inputNumber.value);
//   const result: number = value * 2;
//   output.innerText = result.toString();
// });

// divideButton.addEventListener('click', function () {
//   const value: number = parseInt(inputNumber.value);
//   const result: number = value / 2;
//   output.innerText = result.toString();
// });


// const inputNumber: HTMLInputElement = document.getElementById('inputNumber') as HTMLInputElement;
// const equalButton = document.getElementById('equalButton') as HTMLInputElement;
// const notEqualButton = document.getElementById('notEqualButton') as HTMLInputElement;
// const greaterthanButton = document.getElementById('greaterthanButton') as HTMLInputElement;
// const multiplyButton = document.getElementById('multiplyButton') as HTMLInputElement;
// const greaterThan_or_equalButton = document.getElementById('greaterThan_or_equalButton') as HTMLInputElement;

// const output = document.getElementById('output') as HTMLInputElement;

// equalButton.addEventListener('click', function () {
//   const value: number = +inputNumber.value;
//   const result: boolean = value == 10;
//   output.innerText = result.toString();
// });



// notEqualButton.addEventListener('click', function () {
//     const value: number = +inputNumber.value;
//     const result: boolean = value != 10;
//     output.innerText = result.toString();
// })


// greaterthanButton.addEventListener('click', function () {
//     const value: number = +inputNumber.value;
//     const result: boolean = value > 10
//     output.innerText = result.toString();
// })

// greaterThan_or_equalButton.addEventListener('click', function () {
//     const value: number = +inputNumber.value;
//     const result: boolean = value >= 10
//     output.innerText = result.toString();
// })

// const person = {
//     name: 'John Doe',
//     age: 25,
//     address: {
//         street: '13 main St',
//         city: 'Madrid',
//         country: 'Spain',
// },
//     hobbies: ['Cooking', 'Sports']
// }


// console.log(person.address.country)


// const n : number = 10;
// const s : string = 'Hello';
// const b : boolean = true;
// const array : number[] = [1,2,3,4,5];


interface Person {
    name: string;
    age: number;
    address: Address;
    hobbies: string[];
}

interface Address {
    street: string;
    city: string;
    country: string;
}

const person: Person = {
    name: 'John Doe',
    age: 25,
    address: {
        street: '13 main St',
        city: 'Madrid',
        country: 'Spain',
    },
    hobbies: ['Cooking', 'Sports']
}


// function add(number1: number, number2: number): number {
//     return number1 + number2;
// }


function DisplayDetails(person: Person): string {
    return 'name=' + person.name + ', \nage=' + person.age + ', \naddress=' + person.address.street + ', ' + person.address.city + ', ' + person.address.country + ', \nhobbies=' + person.hobbies;
}

const address: Address[] =[
    { street: '13 main St', city: 'Madrid', country: 'Spain'},
    { street: '14 main St', city: 'Madrid', country: 'Spain'},
    { street: '15 main St', city: 'Madrid', country: 'Spain'},
]

// console.log(DisplayDetails());

// console.log(person.address.country)

export {} // Para que no de error por el export 