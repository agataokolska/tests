const cart = [
    {name:'owoc', price: 25},
    {name:'bułka', price: 15},
    {name:'pomidor', price: 5},
    {name:'sok', price: 0.5}
]

//total 45,5




//test
if(orderTotal(cart) !== 45.5) {
    throw new Error('cant calculate order')
}