import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Grocery = () => {
    const cartItem = useSelector(e => e.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    }

    return (
        <div className="w-6/12 m-auto">
            <div className="text-center">
                <button className="bg-black p-2 m-2 text-white rounded-lg" onClick={handleClearCart}>Clear</button>
            </div>
            {cartItem.length === 0 && <h2>The Cart is empty</h2> }
            <ItemList items={cartItem} />
        </div>

    )
}
export default Grocery;