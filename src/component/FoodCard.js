import { CARD_IMG_URL } from "../utils/constant";

const FoodCard = (props) => {
  const { restroData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    locality,
    areaName,
    sla,
  } = restroData?.info;

  return (
    <>
    {/* <div className="m-8 w-[390px] h-[335px] hover:border-[1px] border-white rounded-2xl"> */}
      <div className="w-80 h-72 relative flex flex-1 m-4 transition-transform duration-300 transform scale-100 hover:scale-90 ">
        <img
          src={CARD_IMG_URL + cloudinaryImageId}
          alt=""
          className="w-full h-full rounded-2xl"
        />
        {/* <div className="w-96 h-80 rounded-2xl absolute bottom-0 hover:w-80 hover:h-72"></div> */}
        <div className="absolute text-white bottom-0 py-2 px-1 w-full bg-neutral-900">
          <h2 className="text-xl leading-7 text-yellow-300 font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-xs">{cuisines.slice(0, 3).join(", ")}</p>
            <h4 className="rating">
              <span>✯</span> {avgRating}
            </h4>
          </div>
          <div className="flex justify-between">
            <h5 className="text-sm">
              {locality}, {areaName}
            </h5>
            <h5>{sla.slaString}</h5>
          </div>
          <h4>{costForTwo}</h4>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export const withPromotedRestaurent = (FoodCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white p-2 m-5 z-30">
          Promoted
        </label>
        <FoodCard {...props} />
      </>
    );
  };
};

export default FoodCard;
