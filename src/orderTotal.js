// export const orderTotal = (cart) => (
//     cart.reduce((r, el, i, arr) =>
//         r += el.price * (el.quantity || 1)
//         , 0)
// )

// export const orderTotal = (cart) => (
//     cart.reduce((r, el, i, arr) =>
//         r += el.price * (el.quantity ? el.quantity : 1)
//         , 0)
// )

export const orderTotal = (cart) => (
    cart.reduce(
        (r, el) => {
            const realQuantity = el.quantity === undefined ? 1 : el.quantity

            return r + (el.price * realQuantity)
        },
        0
    )
)