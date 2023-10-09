import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux/es";
import {clearCart} from "../utils/cartSlice"
import cartImage from "../../Images/cartEmpty.png"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItem = ()=>{
    dispatch(clearCart())
  }

  if (cartItems.length === 0) return (
    <> 
  <div class="h-screen flex justify-center items-center absolute top-0 bg-custom-color w-full">
  <h1 className="absolute top-28 text-xl text-yellow-50">Empty Cards, Fill Carts!</h1>
  <img class="max-h-full max-w-full" src={cartImage} alt="Responsive Image" />
</div>
</>
)
  return (
    <>
      <div className="w-full bg-custom-color py-10 flex justify-center">
        <div className="w-[100%] relative lg:w-3/5  md:w-4/5 sm:w-11/12">
          <div className="w-[85%] m-auto text-center text-white text-2xl text-bold flex justify-between">
            <h1 className="font-semibold ">Cart</h1>
            <button className="text-sm bg-gray-500 text-black font-semibold p-2" onClick={clearCartItem}>Clear Cart</button>
          </div>
          <div className="m-2 p-2 rounded-xl text-white font-bold">
            {cartItems.map((cart, index) => (
              <MenuItem key={index++} item={cart.item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
