import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ serviceCard }) => {
  const {
    id,
    img,
    category,
    category_color,
    title,
    title_color,
    bg_color,
    price,
    description,
  } = serviceCard;
  return (
    <div>
      <div className="">
           
        <div
          style={{ backgroundColor: bg_color }}
          className="hero-content m-4  rounded-md flex-col lg:flex-row"
        >
          <img className="h-48 w-48" src={img} />
          <div>
            <span
              style={{ backgroundColor: category_color, color: title_color }}
              className={`text-lg py-1 px-2 rounded-sm font-sm  `}
            >
              {category}
            </span>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p style={{ color: title_color }} className="py-6">
              {price}
            </p>
            <Link to={`/card-details/${id}`}
              style={{ backgroundColor: category_color }}
              className="btn "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
