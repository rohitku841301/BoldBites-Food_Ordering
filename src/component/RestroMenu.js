import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { CARD_IMG_URL } from "../utils/constant";
import MenuItem from "../component/MenuItem";
import { ITEM_URL } from "../utils/constant";
import RestroCategory from "./RestroCategory";
import restroShimmer from "../../Images/restroMenu1.png"

const RestroMenu = () => {
  const { resId } = useParams();

  const [resInfo, all] = useRestaurentMenu(resId);

  let [resMenuInfo, setResMenuInfo] = useState(null);
  let [resMenuInfoCopy, setResMenuInfoCopy] = useState(null);

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(ITEM_URL + resId + "&submitAction=ENTER");
    const json = await data.json();

    // console.log(category)
    setResMenuInfo(
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
    );
    setResMenuInfoCopy(
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
    );
  };

  if (resInfo === null || resMenuInfo === null) return (
    <> 
  <div class="h-screen flex justify-center items-center absolute top-0 bg-custom-color w-full">
  <img class="max-h-full max-w-full" src={restroShimmer} alt="Responsive Image" />
</div>
</>
)


  const { name, city, areaName, avgRating, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info ||
    resInfo?.data?.cards[1]?.card?.card?.info;
  const CATEGORY = resInfo?.data?.cards.filter(
    (cate) => cate?.groupedCard?.cardGroupMap?.REGULAR?.cards !== undefined
  );
  const category = CATEGORY[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
 
  return (
    <div className="bg-custom-color">
      <div className="flex justify-center ">
        <div className="text-white w-[88%] mt-6 flex justify-between lg:w-3/5 lg:mt-16 md:w-4/5 md:mt-12">
          <div>
            <h1 className="text-3xl leading-[60px] font-semibold md:text-5xl md:leading-[100px] sm:text-4xl sm:leading-[80px]">{name}</h1>
            <p className="text-xs ml-1 sm:text-sm">{cuisines.join(", ")}</p>
            <h4 className="text-sm leading-7 sm:text-lg">
              {areaName}, {city}
            </h4>
          </div>
          <h1 className="text-3xl leading-[60px] font-semibold md:text-5xl md:leading-[100px] sm:text-4xl sm:leading-[80px]">
            <span>✯</span>
            {avgRating}
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center my-8">
        <div className="w-[88%] lg:w-3/5 md:w-4/5">
          <button
            className="w-15 px-4 py-1 m-2 bg-yellow-400 rounded-lg"
            onClick={() => {
              setResMenuInfo(resMenuInfoCopy);
            }}
          >
            All
          </button>
          <button
            className="w-15 px-4 py-1 m-2 bg-yellow-400 rounded-lg"
            onClick={() => {
              let vegMenuInfo = resMenuInfoCopy.filter(
                (vegMenu) =>
                  vegMenu.card.info.itemAttribute.vegClassifier === "VEG"
              );
              setResMenuInfo(vegMenuInfo);
            }}
          >
            Veg
          </button>
          <button
            className="w-15 px-4 py-1 m-2 bg-yellow-400 rounded-lg"
            onClick={() => {
              let nonvegMenuInfo = resMenuInfoCopy.filter(
                (vegMenu) =>
                  vegMenu.card.info.itemAttribute.vegClassifier === "NONVEG"
              );
              setResMenuInfo(nonvegMenuInfo);
            }}
          >
            Non-Veg
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col ">
        {category.map((category, index) => (
          <RestroCategory
            key={category.card.card.title}
            category={category}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestroMenu;
