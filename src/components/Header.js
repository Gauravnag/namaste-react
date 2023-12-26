import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constant";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header");
    useEffect(() => {
        console.log("useEffect")
    },[btnNameReact])
    return(
        <>
            <div className="header">
                <div>
                    <img className="logo" src={LOGO_URL}  alt="logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }>{btnNameReact}</button>
                </ul>
            </div>
        </>
    )
}

export default Header;