import { useContext, useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const {loggingUser} = useContext(UserContext);
    useEffect(() => {
     
    },[btnNameReact])
    const onlineStatus = useStatusOnline();
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    
    return(
        <>
            <div className="flex justify-between bg-yellow-100 mb-9">
                <div>
                    <img className="w-28" src={LOGO_URL}  alt="logo" />
                </div>
                <ul className="flex items-center">
                    <li className="px-4"><b>Your Status:</b> {onlineStatus ? "Online" : "Offline" } </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery ({cartItems.length} items)</Link></li>
                    <li className="px-4"><Link to="/cart"> Cart </Link></li>
                    <button className="px-4" onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggingUser}</li>
                </ul>
            </div>
        </>
    )
}

export default Header;