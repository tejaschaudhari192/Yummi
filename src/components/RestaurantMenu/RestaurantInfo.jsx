import React from 'react';
import { FcRating } from 'react-icons/fc';

const RestaurantInfo = ({ info }) => {
    const { name, avgRating, costForTwoMessage, cuisines, feeDetails } = info;
    const { lastMileTravel, slaString } = info.sla;
    return (
        <div className="p-4 rounded-lg  mx-auto">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-green-600">
                    <FcRating size={18} />
                    <span className="mr-1">{avgRating}</span>
                    <span>(10K+ ratings)</span>
                    •
                    <span>{costForTwoMessage}</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-2">
                {cuisines.map((item, index) => {
                    return <a href="#" className="text-orange-500 underline" key={index}>{item}</a>
                })}

            </div>

            <div className="mb-2">
                <span className="font-semibold">Outlet</span>: {info.areaName}
            </div>
            <div className="mb-2">
                <span>{slaString}</span>
            </div>
            <hr />

            <div className="flex items-center text-gray-600">
                <span className="mr-1">🚴</span>
                {feeDetails.message}
            </div>
        </div>
    );
};

export default RestaurantInfo;