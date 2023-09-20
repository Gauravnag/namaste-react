import {LOGO_URL} from "../utils/constant";

const Header = () => {
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
                </ul>
            </div>
        </>
    )
}

export default Header;