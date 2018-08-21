import { orderTotal } from './orderTotal'

const cart0 = []

const cart1 = [
    { name: 'owoc', price: 25 },
    { name: 'bułka', price: 15 },
    { name: 'pomidor', price: 5 },
    { name: 'sok', price: 0.5 }
]

//total 45,5

//test
if (orderTotal(cart1) !== 45.5) {
    throw new Error('cant calculate order')
}

//test in JEST

test('can calculate order total', () => {
    expect(orderTotal(cart1)).toBe(45.5)
})

test('can calculate order total', () => {
    expect(orderTotal(cart0)).toBe(0)
})