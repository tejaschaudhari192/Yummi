import { useEffect, useState } from 'react';
import { ShimmerPostItem } from "react-shimmer-effects";

import RestaurantCard from './RestaurantCard';
// import { restsOnline, restsOnline } from './restsOnline';
import './RestsOnline.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function RestsOnlineList(pr) {
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
        // console.log(restsOnline);

        setRestaurantList(restsOnline)
        setFilteredList(restsOnline)
        // console.log('effect rendered');
    }

    function filterData(searchText, restaurantList) {
        return restaurantList.filter((restaurant) => {
            return restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
    }


    return restaurantList < 1 ? (
        <div className='restsOnline-block'>
            <h2 className='rest-heading'>Restaurants with online food delivery in Shirpur</h2>

            <div className="search-box">
                <input
                    type="text" className="search-input" placeholder="Search.."
                    value={searchText}
                    onChange={e => {
                        setSearchText(e.target.value);
                    }}
                />

                <button className="search-button">
                    <FaSearch
                        onClick={() => {
                            setFilteredList(filterData(searchText, restaurantList))
                        }}
                    />

                </button>
            </div>



            <div className='restsOnline-grid'>

                <ShimmerPostItem imageHeight={150} title text />
                <ShimmerPostItem imageHeight={150} title text />
                <ShimmerPostItem imageHeight={150} title text />
                <ShimmerPostItem imageHeight={150} title text />
            </div>
        </div>
    ) : (
        <div className='restsOnline-block'>
            <h2 className='rest-heading'>Restaurants with online food delivery in Shirpur</h2>

            <div className="w-30 flex items-center border border-gray-300 rounded-lg overflow-hidden">
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
                    className="bg-blue-500 text-white px-4 py-2"
                    onClick={() => {
                        setFilteredList(filterData(searchText, restaurantList))
                    }}>
                    Search
                </button>
            </div>






            <div className='restsOnline-grid'>

                {filteredList.map((rest, index) => {
                    return <Link key={rest.info?.id} to={"/restaurants/" + rest.info?.id}>
                        <RestaurantCard rest={rest} />
                    </Link>;
                })}
            </div>
        </div>
    );

}