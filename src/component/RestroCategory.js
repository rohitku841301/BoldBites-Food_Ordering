import { useState } from "react";
import MenuItem from "./MenuItem";

const RestroCategory = ({category, showItem, setShowIndex}) => {
    // console.log(category);
  const { title, itemCards } = category?.card?.card;
  
  return (
    <>
      <div className=" w-[88%] bg-custom-menu m-2 p-2 rounded-xl text-white font-bold lg:w-3/5  md:w-4/5 sm:p-5 sm:m-5">
        <div className="flex justify-between cursor-pointer" onClick={()=>(
            setShowIndex()  
            )}>
          <h1 className="px-5 ">{title} ({itemCards.length})</h1>
          <h2>▼</h2>
        </div>
        {itemCards.map((items) => (
            showItem && <MenuItem key={items.card.info.id} item={items} /> 
        ))}
      </div>
    </>
  );
};

export default RestroCategory;
