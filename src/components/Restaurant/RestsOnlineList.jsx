import { useEffect, useState } from 'react';
import { ShimmerPostItem } from "react-shimmer-effects";

import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import ShimmerRestaurantList from './ShimmerRestaurantList';

export default function RestsOnlineList() {
    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const uri = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        const result = await fetch(uri);
        const json = await result.json();

        const restsOnline = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

        setRestaurantList(restsOnline)
        setFilteredList(restsOnline)
    }

    function filterData(searchText, restaurantList) {
        return restaurantList.filter((restaurant) => {
            return restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
    }


    return (
        <>
            <h1 className='text-2xl mt-7'>Restaurants with online food delivery in Shirpur</h1>

            <div className="w-30 my-10 flex items-center border border-gray-300 rounded-full overflow-hidden">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 w-full focus:outline-none"
                    value={searchText}
                    onChange={e => {
                        setSearchText(e.target.value);
                        setFilteredList(filterData(searchText, restaurantList))

                    }}
                />
                <button
                    className="bg-orange-500 text-white px-4 py-2"
                    onClick={() => {
                        setFilteredList(filterData(searchText, restaurantList))
                    }}>
                    Search
                </button>
            </div>

            {restaurantList < 1 ? <>
                <ShimmerRestaurantList />
                <ShimmerRestaurantList />

            </> : <></>

            }

            <div className='grid grid-cols-4 gap-x-5'>

                {filteredList.map((rest) => {
                    return <Link key={rest.info?.id} to={"/restaurants/" + rest.info?.id}>
                        <RestaurantCard rest={rest} />
                    </Link>;
                })}
            </div>
        </>
    );

}