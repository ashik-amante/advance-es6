const products = [
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'apple', price: 165000},
    {id:3, name: 'hp', price: 30000}
]

// map
const name = products.map(pn => pn.name)
console.log(name);

const price = products.map(dam => dam.price)
console.log(price);

// foreach

const pname = products.forEach( n => console.log(n.name))

// filter

const expencive = products.filter(productPrice => productPrice.price > 70000)
// console.log(expencive);
// 

// find

const affordable = products.find(p => p.price < 50000);
console.log(affordable); 

// reduce

const total = products.reduce((previous, current) => previous + current.price, 0);
console.log(total);