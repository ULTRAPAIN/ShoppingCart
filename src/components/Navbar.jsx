import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
    const {cart} =useSelector(state=>state);
    return (
        <div>
            <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5">
                    <img  className="h-16" src="https://www.brandbucket.com/sites/default/files/logo_uploads/264375/large_shopicus.png"/>
                    </div>
                
                </NavLink>
            
            <div className="flex items-center mr-5 space-x-6 font-medium text-slate-100">
                <NavLink to="/">
                    <p className="transition duration-100 ease-in hover:text-green-600">Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className="relative">
                        <FaShoppingCart className="text-2xl transition duration-200 ease-in hover:text-green-500"/>
                        {
                            cart.length > 0 && (
                                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -top-1 -right-2 animate-bounce">
                                    {cart.length}
                                </span>
                            )
                        
                        }
                    </div>
                </NavLink> 
            </div>   
        
           
                
               
            </nav>
            </div>
       
    )
}

export default Navbar
