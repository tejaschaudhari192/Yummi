import React, { useState } from 'react';
import { json } from 'react-router-dom';
import DishCard from './DishCard';

export const AccordionItem = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // console.log(data[0]);

  return (
    <div className="border-b border-gray-200">
      <h2
        className="text-xl font-semibold cursor-pointer p-4 hover:bg-gray-100"
        onClick={toggle}
      >
        {title}
      </h2>
      {isOpen &&
        <div className="p-4">
          {data.map((item, index) => {
            return <DishCard key={index} data={item} />

          })}
        </div>}
    </div>
  );
};

const MenuAccordion = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <AccordionItem title="Recommended (7)">
        {/* Recommended items go here */}
      </AccordionItem>

      <AccordionItem title="Match Day Combos">
        <div className="py-2">Match Day Combo for 2 (2)</div>
        <div className="py-2">Match Day Combo for 1 (1)</div>
      </AccordionItem>

      <AccordionItem title="Pot Rice (2)">
        <div className="py-2">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Paneer Pot Rice</h3>
              <p>₹425</p>
              <p className="text-sm text-yellow-600">⭐ 2.4 (4)</p>
              <p className="text-sm">Serves 1</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
          </div>
        </div>
        <div className="py-2">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Veg Manchurian Pot Rice</h3>
              <p>₹425</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};

export default MenuAccordion;
