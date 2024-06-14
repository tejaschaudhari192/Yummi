import React, { useEffect, useState } from 'react'

const useRestaurantList = () => {
  const [homepageData, setHomepageData] = useState();

  useEffect(() => {
    // setRestaurantList(rests)
      getRestaurantList();
      console.log('effect rendered');
    }
  );

  async function getRestaurantList() {
    const uri = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const response = await fetch(uri);
    const json = await response.json();
    console.log(json);   
    setHomepageData(json)
    // console.log(restaurantList);
  }
  return homepageData;
}

export default useRestaurantList;
