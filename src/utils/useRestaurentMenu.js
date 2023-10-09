import { ITEM_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  let [resMenuInfo, setResMenuInfo] = useState(null);
  let [resMenuInfoCopy, setResMenuInfoCopy] = useState(null);

  const all = ()=>{
    setResMenuInfo(resMenuInfoCopy);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(ITEM_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
  };
  return [resInfo, all];
};

export default useRestaurentMenu;
