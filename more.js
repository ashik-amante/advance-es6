// task 1 
// for loop
let numbers = [1,3,5,7,9]
let even = []
for(const number of numbers){
    const element = number + 1;
    even.push(element)
}
console.log(even);

// map

const evenNumber = numbers.map(number => number +1);
console.log(evenNumber);

// task 2....................................................................
const array = [33,50,79,90,101,30];

const devisible = array.filter(number => number %10 === 0)
console.log(devisible);

// find
const find = numbers.find(number => number %10 === 0)
console.log(find);


// task 3 ................................................................
const instructor  = [
    {name: 'Nodi', age:28, position: 'senior'},
    {name: 'Akhi', age:24, position: 'junior'},
    {name: 'sobuj', age:25, position: 'senior'}
]

const senior = instructor.filter(senior => senior.position === 'senior').map(instructor => instructor.name)
console.log(senior);


// task 4 .........................................
const people =[
    {name:'meena', age:20},
    {name:'Rina', age:25},
    {name:'kona', age:20}
]
let sum = 0
for(const person of people){
    const element  = person.age;
    sum = sum + element;
}
console.log(sum);

// reduce.......

const sumofage = people.reduce((sum, person) => sum + person.age, 0)
console.log(sumofage);