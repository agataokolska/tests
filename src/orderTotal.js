export const orderTotal = (cart) => (
    cart.reduce((r,el,i,arr)=>
         r+=el.price
    ,0)
    )