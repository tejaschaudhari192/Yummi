import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if (resInfo == null) {
      fetchData();
    }
  }, [resInfo])

  async function fetchData() {
    const uri = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER&restaurantId=';
    const result = await fetch(uri + resId);
    const json = await result.json();

    const restJson = await json.data;
    // console.log(restJson);
    console.log('effect rendered');
    setResInfo(restJson);
  }
  return resInfo;
}

export default useRestaurantMenu
