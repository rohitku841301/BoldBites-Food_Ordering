import banner from "../../Images/banner1.png";

const Banner = () => {
  return (
    <>
      <img className="w-full h-[60vh] sm:h-[70vh]" src={banner} alt="" />
      <div class="absolute top-1/4 text-center bg-opacity-50 p-4 text-white w-full">
        <h1 className="text-[70px] leading-[70px] font-dancing xs:leading-[90px] xs:text-[90px] sm:leading-[100px] sm:text-[100px] md:text-[130px] md:leading-[110px]  lg:leading-[130px] lg:text-[150px] ">BoldBites</h1>
        <h2 className="text-xs md:text-2xl xs:text-xl">Satisfy Your Cravings</h2>
      </div>
    </>
  );
};

export default Banner;
