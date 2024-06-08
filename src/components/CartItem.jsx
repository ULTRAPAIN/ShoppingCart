/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


function CartItem({item,itemIndex}) {
const dispatch=useDispatch();
const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
}

    return (
        <div>
             <div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div
                        onClick={removeFromCart}>
                        <MdDeleteForever />
                        </div>
                    </div>

                </div>
             </div>
        </div>
    )
}

export default CartItem
