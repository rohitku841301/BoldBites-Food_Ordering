import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import cart from "../../Images/cart.svg";
import logo from "../../Images/1.png";
import cross from "../../Images/cross.svg";
import hamburger from "../../Images/hamburger.svg";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const [hamb, setHamb] = useState(hamburger);
  const [check, setCheck] = useState(true);
 
 
  // const [cross, setCross] = useState(true)

  const { userName } = useContext(userContext);

  // Subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);



  return (
    <div className="flex justify-between items-center px-2 py-2 relative w-full z-20 bg-custom-color lg:px-20 sm:px-10 xs:px-4">
      <div className="flex sm:hidden">
        <img
          onClick={() => {
            check
              ? setHamb(hamburger) || setCheck(false)
              : setHamb(hamburger) || setCheck(true);
          }}
          src={hamb}
          alt="hamburger"
        />
        
      </div>
      <div className="mx-2 lg:mx-4 text-white">
          <Link to="/" className="flex items-center">
            <img className="w-[60px]" src={logo} alt="logo" />
            <h1 className="font-dancing text-xl ">BoldBites</h1>
          </Link>
        </div>

      { check === false && (
        <ul className="flex flex-col absolute top-[11vh] bg-custom-color text-white text-sm items-center sm:hidden" onClick={()=>{
         setCheck(true)
        }}>
          <li className="mx-2 lg:mx-4">
            <Link to="/restaurent"> Restaurant </Link>
          </li>

          <li className="mx-2 sm:mx-4">
            <Link to="/work">Work</Link>
          </li>
          <li className="mx-2 sm:mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 sm:mx-4 ">
            <Link to="/cart" className="flex">
              <img src={cart} alt="cart" /> - {cartItems.length}
            </Link>
          </li>
        </ul>
      )}

      

      <div className="flex items-center text-white text-sm">
      <ul className="hidden  text-white text-sm items-center sm:flex">
        <li className="mx-2 lg:mx-4">
          <Link to="/restaurent"> Restaurant </Link>
        </li>

        <li className="mx-2 sm:mx-4">
          <Link to="/work">Work</Link>
        </li>
        <li className="mx-2 sm:mx-4">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-2 sm:mx-4 ">
          <Link to="/cart" className="flex">
            <img src={cart} alt="cart" /> - {cartItems.length}
          </Link>
        </li>
      </ul>
        <button
          className="mx-2 sm:mx-4 bg-black"
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {login}
        </button>
        <h2>{userName}</h2>
      </div>
    </div>
  );
};

export default Header;
