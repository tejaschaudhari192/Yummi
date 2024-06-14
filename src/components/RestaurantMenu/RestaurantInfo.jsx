import React from 'react';

const RestaurantInfo = ({info}) => {
    const {name,avgRating,costForTwoMessage,cuisines,feeDetails} = info;
    const {lastMileTravel,slaString} = info.sla;
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-green-600">
                    <span className="mr-1">{avgRating}</span>
                    <span>(10K+ ratings)</span>
                </div>
                <span>{costForTwoMessage}</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
            {cuisines.map((item,index) => {
                return <a href="#" className="text-orange-500" key={index}>{item}</a>
            })}
            
            </div>
            <div className="mb-2">
                <span className="font-semibold">Outlet</span>: {info.areaName}
            </div>
            <div className="mb-2">
                <span>{slaString}</span>
            </div>
            <div className="flex items-center text-gray-600">
                <span className="mr-1">🚴</span>
                {feeDetails.message}
            </div>
        </div>
    );
};

export default RestaurantInfo;