import { orderTotal } from './orderTotal'

const cart0 = []

const cart1 = [
    { name: 'owoc', price: 25 },
    { name: 'bułka', price: 15 },
    { name: 'pomidor', price: 5 },
    { name: 'sok', price: 0.5 }
]
const cart2 = [
    { name: 'owoc', price: 25, quantity: 1 },
    { name: 'bułka', price: 15, quantity: 2 },
]

const cart3 = [
    { name: 'owoc', price: 25, quantity: 0 },
    { name: 'bułka', price: 15, quantity: 2 },
]

//test in JEST
test('can calculate order total', () => {
    expect(orderTotal(cart0)).toBe(0)
})
test('can calculate empty order total', () => {
    expect(orderTotal(cart1)).toBe(45.5)
})

test('can calculate order total with quantity 0', () => {
    expect(orderTotal(cart2)).toBe(55)
})

test('can calculate order total with quantity', () => {
    expect(orderTotal(cart3)).toBe(30)
})