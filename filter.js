const number = [1,2,3,4,52,232,34,45,56,]
const result = number.filter(num => num > 50);
console.log(result);

// filter return an array

const even = number.filter(num => num %2 === 0)
console.log(even);

// soto vai find

const age = [34,45, 56,76,78,9,33]
const short = age.find(boyos => boyos > 50)
console.log(short,typeof short);
// find only provide the first result
