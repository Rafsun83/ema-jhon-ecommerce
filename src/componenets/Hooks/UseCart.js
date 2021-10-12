import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const UseCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {

        if (products.length) {
            const saveCart = getStoredCart();
            // console.log(saveCart)
            const storedCart = []
            for (const key in saveCart) {
                const addedproducts = products.find(product => product.key === key)
                if (addedproducts) {
                    const quantity = saveCart[key]
                    addedproducts.quantity = quantity
                    storedCart.push(addedproducts)
                }

            }
            setCart(storedCart)
        }

    }, [products])
    return [cart, setCart]
}
export default UseCart;