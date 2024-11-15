const reducer = (state,action)=>{
    switch (action.type) {
        case 'CLEAR_CART':{
            return {...state , cart:[]}
        }
        case 'REMOVE_ITEM' : {
            const updatedCart = state.cart.filter(item => item.id!== action.id)
            return {...state, cart: updatedCart}
        }
        case 'CHANGE-QUANTITY':{
            const updatedCart = state.cart.map(item => {
                if(item.id === action.payload.id && action.payload.quantity > 0){
                    return {...item,quantity:action.payload.quantity}
                }
                return item
            })
            return {...state, cart: updatedCart}
        }
        case 'TOTAL':{
            let {total} = state.cart.reduce((totalCart,currentItem) => {
                let {price,quantity}=currentItem;
                totalCart.total += price * quantity;
                return totalCart;
                
            },{total:0})
            return {...state, total}
        }
        
        default: return state
         
    }


}
export default reducer;