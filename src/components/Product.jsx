/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

function Product({ post }) {
    const [selected, setSelected] = useState();
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();

    // this function will be called when the user clicks on the Add to Cart button
    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added to Cart");
    };

    // this function will be called when the user clicks on the Remove from Cart button
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    };

    return (
        // displaying the title and description of the product of each product individually 
        <div className="flex flex-col items-center justify-between px-3 py-5 transition duration-300 ease-in border rounded-2xl hover:scale-110 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] space-y-3">
            <div>
                <p className="w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate">{post.title}</p>
            </div>
            <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
                <p>{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
            </div>
            {/* displaying the image of the product */}
            <div className="h-[180px]">
                <img className="w-full h-full " src={post.image} alt={post.title} />
            </div>
            <div className="flex items-center justify-between w-full gap-12 mt-5">

            
            <div>
                {/* displaying the price of the product */}
                <p className="ml-3 font-semibold text-green-600 ">${post.price}</p>
            </div>
            {/* if the product is already in the cart then the remove from cart button will be shown else the Add to Cart button will be shown */}
            
                {
                    cart.some((p) => p.id === post.id) ? (
                        // since now we have to remove the item from the cart so we will dispatch the remove action from the CartSlice
                        <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in " onClick={removeFromCart}>Remove Item</button>
                    ) : (
                        // since now we have to add the item to the cart so we will dispatch the add action from the CartSlice
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"  onClick={addToCart}>Add to Cart</button>
                    )
                }
            </div>
        </div>
    );
}

export default Product;
