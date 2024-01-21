import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header");
    useEffect(() => {
        console.log("useEffect")
    },[btnNameReact])
    const onlineStatus = useStatusOnline();
    
    return(
        <>
            <div className="header">
                <div>
                    <img className="logo" src={LOGO_URL}  alt="logo" />
                </div>
                <ul className="header-menu">
                    <li><b>Your Status:</b> {onlineStatus ? "Online" : "Offline" } </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button>
                </ul>
            </div>
        </>
    )
}

export default Header;