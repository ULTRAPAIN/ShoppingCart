/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  // to know whether the cart has items in it or not  
  // this can be known by accessing the state from the CartSlice by using the useSelector hook 
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <div className="container p-4 mx-auto">
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row max-w-6xl min-h-[80vh] mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex-1">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
            <div className="flex flex-col items-start justify-center w-full p-4 px-16 mt-6 ml-0 rounded-lg md:scale-105 bg-gray-120 md:ml-6 md:mt-0 lg:w-1/3">
              <div className="mb-2 mr-20 text-2xl font-semibold text-green-900 uppercase">Your Cart</div>
              <div className="mb-4 text-3xl font-bold text-green-800 uppercase lg:text-5xl">Summary</div>
              <p className="mb-2">
                <span className="text-xl font-semibold text-gray-700">Total Items: </span>
                {cart.length}
              </p>
              <p className="mb-4">
                <span className="text-xl font-semibold text-gray-700">Total Amount: </span>
                <span className="font-bold text-black">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full px-4 py-2 text-white transition duration-300 bg-green-700 rounded-lg hover:bg-green-900">
                Checkout Now
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <h2 className="mb-6 text-4xl font-bold uppercase ">Cart is Empty</h2>
            <Link to="/">
              <button className="w-[10rem] px-4 py-2 text-white transition duration-300 bg-green-700 rounded-lg hover:bg-green-900">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
