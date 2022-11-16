import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto my-20 p-4">
        <h1 className="text-orange-500 font-bold text-4xl text-center py-4">
          Top Rated Menu Items
        </h1>
        {/* Categories */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((item, index) => (
            <div
              className="flex justify-between items-center bg-slate-200 rounded-lg shadow-xl"
              key={item.id}
            >
              <p className="font-bold sm:text-2xl p-2">{item.name}</p>
              <img className="w-20 h-auto" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
