import React from 'react';

const DishCard = ({data}) => {
    const {name} = data.card.info;
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto flex items-start">
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <span className="inline-block w-4 h-4 border border-green-500 rounded-full mr-2"></span>
          <h2 className="text-lg font-bold">3 Cheese Melt Sandwich + Side + Coke</h2>
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <span className="text-xl font-semibold">₹368</span>
          <span className="ml-2 text-green-600">40% OFF</span>
          <span className="ml-2 text-gray-500">USE TRYNEW</span>
        </div>
        <p className="text-gray-700 mb-4">
          Enjoy your favourite Grills sandwich with a choice of drink and any choice of side.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="path_to_image"
          alt="3 Cheese Melt Sandwich"
          className="w-24 h-24 rounded-lg mb-2"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
          ADD
        </button>
        <span className="text-gray-500 mt-2">Customisable</span>
      </div>
    </div>
  );
};

export default DishCard;
