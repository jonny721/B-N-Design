import { createContext, useEffect, useState } from "react";

//creamos el contexto
export const CartContext = createContext()

//local storage
const prodLS = JSON.parse(localStorage.getItem('carrito')) || []
//Creamos el proveedor
export const CartProvider = ({children}) => {
    const [cart, setCart]=useState(prodLS)


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    
    //Las funciones para modificar el carrito:
    //Agregar Items
        const addItem= (item, qty)=>{
            if(isInCart(item.id)){
                //existe en el carrito y yo tengo que sumar cantidades
                const carritoActualizado = cart.map((prod)=>{
                    if(prod.id === item.id){
                        //actualisar con la nueva cantidad
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //devuelveo el prod como esta
                        return prod
                    }
                })
                setCart(carritoActualizado)
            }else{
                //agregar y modificar el estado del carrito manteniendo los datos
                setCart([...cart, {...item, quantity:qty}])
            }
        }

    //Borre todo el carrito
        const clear = ()=>{
            setCart([])
        }

    //Elimine un item
        const removeItem = (id) =>{
            setCart(cart.filter((prod)=> prod.id !== id))
        }

        //Diga el total a pagar

        const cartTotal = ()=>{
            return cart.reduce((acc, prod)=> acc += prod.quantity * prod.price,0)
        }
        //Diga el total de items en el carrito (CartWidget)

        const cartQuantity = ()=>{
            return cart.reduce((acc, prod) => acc += prod.quantity,0)
        }

        //devolver true o false si esta o no en el carrito
        const isInCart = (id) =>{
            return cart.some((prod)=> prod.id === id)
        }

        //OPCIONAL
        const itemQuantity = (id)=>{
            const itemInCart = cart.find((item)=> item.id === id)
            if(itemInCart){
                //devolver la cantidad
                return itemInCart.quantity
            }else{
                //no existe en el carrito
                return 0
            }
        }
  return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, cartQuantity, cartTotal, itemQuantity}}>
                {children}
        </CartContext.Provider>
    )
}