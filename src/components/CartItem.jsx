/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className="py-4 border-b-2">
      <div className="flex items-center justify-between max-w-3xl">
        <div className="h-[180px] flex-shrink-0">
          <img className="w-full h-full " src={item.image} alt={item.title} />
        </div>
        <div className="flex-1 ml-4">
          <h1 className="mb-2 text-xl font-semibold">{item.title}</h1>
          <p className="mb-4 text-gray-600">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-green-700">${item.price.toFixed(2)}</p>
            <div
              className=" relative    flex justify-center item-center p-2 text-red-500 transition duration-300 cursor-pointer hover:text-red-700  hover:bg-red-300 w-[40px] h-[40px] bg-red-200 rounded-full -z-1 "
              onClick={removeFromCart}
            >
              <MdDeleteForever  className="absolute "  size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
