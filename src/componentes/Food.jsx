import React, { useEffect, useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // 食物種類篩選器
  const filterType = (type) => {
    setFoods(data.filter((item) => item.category === type));
  };

  // 價錢篩選器
  const priceType = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div>
          {/* Title */}
          <h1 className="text-4xl font-bold text-orange-600 text-center p-4">
            Top Rated Menu Items
          </h1>

          {/* Filter */}
          <div className="flex justify-between flex-wrap my-3">
            {/* Food Filter */}
            <div>
              <h2 className="font-bold text-gray-700 py-1">Filter Type</h2>
              <div className="text-orange-600">
                <button
                  onClick={() => setFoods(data)}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  All
                </button>
                <button
                  onClick={() => filterType("burger")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  Burgers
                </button>
                <button
                  onClick={() => filterType("pizza")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  Pizza
                </button>
                <button
                  onClick={() => filterType("salad")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  Salads
                </button>
                <button
                  onClick={() => filterType("chicken")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  Chicken
                </button>
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="font-bold text-gray-700 py-1">Filter Price</h2>
              <div className="text-orange-600">
                <button
                  onClick={() => priceType("$")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  $
                </button>
                <button
                  onClick={() => priceType("$$")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  $$
                </button>
                <button
                  onClick={() => priceType("$$$")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  $$$
                </button>
                <button
                  onClick={() => priceType("$$$$")}
                  className="mx-1 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  $$$$
                </button>
              </div>
            </div>
          </div>

          {/* Food */}
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-5 mt-4">
            {foods.map((item, index) => {
              return (
                <div
                  className="rounded-t-lg shadow-lg hover:scale-110 duration-300"
                  key={item.id}
                >
                  <img
                    className="w-full h-[150px] sm:h-[140px] md:h-[130px] rounded-t-lg object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex justify-between py-5 px-2">
                    <h1 className="font-bold">{item.name}</h1>
                    <div className="rounded-full bg-orange-400 text-white">
                      {item.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
