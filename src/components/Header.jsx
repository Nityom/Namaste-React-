import { LOGO_URL } from "../utils/contants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //Subscribing to store using the selector 

  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);





  return (
    <div className="flex justify-between bg-green-100 shadow-lg ">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus? "✅" : "❌"}
          </li>
          <li className="px-4">   <Link to='/'>
         Home
            </Link></li>
          <li className="px-4">   <Link to='./about'>
          About Us
            </Link></li>
          <li className="px-4">  
             <Link to='./grocery'>
          Grocery
            </Link></li>
          <li className="px-4">
            <Link to='./contact'>
            Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to='/cart'>
            Cart - ({cartItems.length} items)
            </Link>
            
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;