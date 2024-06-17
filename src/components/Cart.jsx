import { useDispatch, useSelector } from "react-redux";
import DishCard from "./RestaurantMenu/DishCard";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart())
    }

    return (
        <div className="m-10 mt-20 p-10">
            <h1 className="font-bold text-center">Cart ({cartItems.length == 0 ? "Your cart is Empty" : cartItems.length + "Items"}) </h1>
            <button
                className="border-2 bg-black text-white p-2 rounded-lg"
                onClick={handleClearCart}
            >
                clear🧹
            </button>

            {cartItems.map((cartItem, index) => {
                return <DishCard data={cartItem} key={index} />
            })}

        </div>
    )
}

export default Cart;