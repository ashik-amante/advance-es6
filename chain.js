// data access
const data = [{id:12, salary:323232}];

console.log(data[0].salary); //obj inside array thats why [0]


const products = {
    count:23,
    data:[
        {id:1, name: 'apple', price:23000},
        {id:2, name:'lenevo', price:2322}
    ]
}

console.log(products.data[1].price);

const user = {
    name: 'ashik',
    address: {
        street:{
            first:'23 street0',
            second: 'bangla bazar',
            third:'hoga  mara'
        }
    },
    city:'dhaka'

}
const user2 = {
    name: 'ashik',
    address: {
        city:'chitta',
        country: 'bd'
    },
    city:'dhaka'

}
console.log(user.address.street.second);
console.log(user2.address.street?.second); //to avoid error use ? mark
