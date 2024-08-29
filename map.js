const number = [1,2,3,4];
let double = []

for(const num of number){
    const dou = num * 2;
    double.push(dou)
    
}
// console.log(double);

//  same thing using map 
//  a map function loop through all the element of an array, hold the result and provide result after operation

const double2 = x => x*2;

const result = number.map(double2);
console.log(result);


// short
const sqre = number.map(x => x*x)

console.log(sqre);


const friends = ['ashik', 'sakil', 'mithfa'];
const len = friends.map(frnd => frnd.length);
console.log(len);

const firstletter = friends.map(friend => friend[0])
console.log(firstletter);