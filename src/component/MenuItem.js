import { useState } from "react";
import { CARD_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const MenuItem = (props) => {
  // const {info} = props?.item?.card;

  const {
    name,
    cuisines,
    imageId,
    ratings,
    costForTwo,
    defaultPrice,
    price,
    category,
    description,
  } = props?.item?.card?.info;
  // const [desc, setDesc] = useState(description.slice(0, 200) + "...");
  // const [check, setCheck] = useState(true);
  // const [readMore, setReadMore] = useState("Read More");
  const dispatch = useDispatch();
  const addCards = (items) => {
    dispatch(addItems(items));
  };

  return (
    <div className="flex  bg-custom-menu mx-0 my-5 border-b-2 border-gray-600 xs:mx-3 p-5">
      <div className="relative w-[25%] sm:w-[20%]">
        <img
          src={CARD_IMG_URL + imageId}
          alt=""
          className=" rounded-2xl w-full h-[90px] sm:h-[100px] xs:h-[110px]"
        />
        <h4 className="absolute top-0 bg-black text-white p-1 text-xs rounded-md">
          {ratings.aggregatedRating.rating === undefined ? (
            <span></span>
          ) : (
            <span>✯{ratings.aggregatedRating.rating}</span>
          )}
        </h4>
      </div>

      <div className="px-2 text-white w-[75%] sm:w-[80%]">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg text-yellow-400 xs:text-xl">{name}</h2>
          <button
            className=" text-white text-xs cursor-pointer text-center bg-black p-2 mx-2 rounded"
            onClick={() => addCards(props)}
          >
            Add
          </button>
        </div>
        <h6 className="text-xs text-gray-300">{category}</h6>

        <h4>₹ {price / 100 || defaultPrice / 100}</h4>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
