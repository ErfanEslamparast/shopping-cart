import { createContext, useContext, useEffect, useReducer } from "react"
import cartItems from './data'
import reducer from "./reducer"
import { type } from "@testing-library/user-event/dist/type"
 const CartContext= createContext()

    const initialState = {
        loading:false,
        cart:cartItems,
        total:0,
        amount:0
    }

    const CartProvider = ({children})=>{
        
        const [state,dispatch] = useReducer(reducer,initialState)

        const clearCart = ()=>{
            dispatch({type:'CLEAR_CART'})
        }
        const remove = (id)=>{
            dispatch({type:'REMOVE_ITEM',id:id})
        }
        const changeQNT = (obj)=>{
            dispatch({type:'CHANGE-QUANTITY',payload:obj})
        }

        useEffect(() => {
            dispatch({type:'TOTAL'})
        }, [state.cart]);
        return(
            <CartContext.Provider value={{...state,clearCart,remove,changeQNT}}>{children}</CartContext.Provider>
        )
    }
    const useCartContext = ()=>{
        return useContext(CartContext)
    }
    
    export {CartProvider,useCartContext}
