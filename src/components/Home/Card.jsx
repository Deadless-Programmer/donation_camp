import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { id, img, category, category_color, title, title_color, bg_color } =
    data;
  // console.log(category_color);
  // const categoryColor = data.category_color.slice(3);
  // console.log(categoryColor);
  const navigate = useNavigate();
  // const handleClick = () => {
  //   console.log("clicked");
  //   navigate(`/card-details/${id}`);
  // };
  return (
    <Link to={`/card-details/${id}`}
      // onClick={handleClick}
      style={{ backgroundColor: bg_color }}
      className={`w-96 rounded overflow-hidden shadow-lg mx-auto mb-4 cursor-pointer `}
    >
      <img
        src={data.img}
        alt={data.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="pt-4 pb-2 px-4 ">
        <span
          style={{ backgroundColor: category_color, color: title_color }}
          className={`text-lg py-1 px-2 rounded-sm font-sm  `}
        >
          {category}
        </span>
        <h1 style={{ color: title_color }} className="text-2xl font-bold  mt-2">
          {title}
        </h1>
        {/* <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium">{data.price}</span>
        <button
          className={`px-3 py-2 rounded-md text-sm font-medium text-center `} 
        >
          Add to Cart
        </button>
      </div> */}
      </div>
    </Link>
  );
};

export default Card;
