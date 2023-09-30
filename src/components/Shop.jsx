import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { ShoeContext } from "../ShoeContext";
import { useAuth } from "../AuthContext";

const Shop = () => {
  const shoes = useContext(ShoeContext);
  const { user } = useAuth();
  const [sortBy, setSortBy] = useState(""); // Default sorting by low to high price
  const [sortedData, setSortedData] = useState([]);

  // Function to handle sorting
  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);

    // Sort the data based on the selected sorting criteria
    if (newSortBy === "priceLowToHigh") {
      setSortedData([...shoes].sort((a, b) => a.price - b.price));
    } else if (newSortBy === "priceHighToLow") {
      setSortedData([...shoes].sort((a, b) => b.price - a.price));
    } else if (newSortBy === "new") {
      setSortedData([...shoes].sort((a, b) => b.isNew - a.isNew));
    } else if (newSortBy === "hot") {
      setSortedData([...shoes].sort((a, b) => b.isHot - a.isHot));
    }
  };

  

  // Use useEffect to set the sortedData when shoes change
  useEffect(() => {
    setSortedData([...shoes]); // Initialize sortedData with unsorted shoes
  }, [shoes]);

  return (
    <div className="w-full flex flex-col my-10 xs:my-6">
      <div className="flex mx-20 justify-between items-start gap-3 xs:mx-3 xs:flex-col">
        <div>
        <h1 className="text-3xl font-semibold">
          Choose what suits your{" "}
          <span className="font-bold text-sky-500">Style</span>
        </h1>
        </div>
        <div className="flex gap-2 justify-center items-center">
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="p-2 rounded-lg bg-slate-200"
        >
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="new">Newest First</option>
          <option value="hot">Hottest First</option>
        </select>
      </div>
      </div>
      <div className="flex justify-center px-20 xs:px-4 items-center w-full">
        <div className="w-[80%] xs:w-full xs:px-3 py-14 gap-10 flex flex-wrap justify-center items-center">
          {sortedData.map((card, index) => (
            <ItemCard
              key={index}
              username={user.username}
              id={card._id}
              title={card.title}
              discount={card.discount}
              price={card.price}
              img={card.img}
              bg={card.bg}
              isNew={card.isNew}
              isHot={card.isHot}
              isFav={card.isFav}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
