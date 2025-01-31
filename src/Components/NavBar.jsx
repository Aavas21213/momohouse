import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import momo from "../assets/momo.png";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";

function NavBar() {
    const { state } = useContext(cartContext);
    const totalItems = state.cartItems.reduce((acc,items)=> {
        return acc + items.qty;
      }, 0 );

    return(
    <>
    <div className="border-b-2 border-gray-200  flex justify-around my-3 pb-[15px]">
    <div className="">
        <NavLink to="/" className="flex items-center gap-x-5">
            <img src={momo} alt="momo_image" className="h-10"/>
            <h1 className="text-green-900 font-bold">momos</h1>
        </NavLink>
    </div>

    <div className="flex items-center gap-x-6 text-slate-600">
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Our Service</NavLink>
        <NavLink to="/advice">Advice</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>  
        <NavLink to="/cart" className="relative"><TiShoppingCart size={24} className="text-red-600"/>
        <span className="absolute top-[-10px] right-[-10px] flex items-center 
        justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">{totalItems}</span>
        </NavLink>  
    </div>

    <div className=" border-gray-500 flex items-center gap-x-6">
        <NavLink to="https://www.facebook.com/" target="_">
        <FaFacebook color="white" size={52} className="p-1 bg-slate-200 rounded-full"/>
        </NavLink>
        <NavLink to="https://www.tiktok.com/" target="_">
        <AiFillTikTok size={52} className="p-1 bg-slate-200 rounded-full"/>
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_">
        <FaInstagram size={52} className="p-1 bg-slate-200 rounded-full"/>
        </NavLink>
        <NavLink className="bg-orange-700 rounded-3xl flex items-center justify-center h-12 w-32 text-white hover:bg-orange-400" to="/contact">Contact Us</NavLink>
    </div>
    </div>
    </>
    );
}
export default NavBar