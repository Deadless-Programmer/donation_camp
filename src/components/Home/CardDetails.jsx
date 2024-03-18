import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveServiceToLs } from "../../utility/localStorage";

const CardDetails = () => {
  const cardData = useLoaderData();

  const { id } = useParams();

  const idx = +id

  // console.log(typeof id, cardData);

  const cards = cardData.find((card) => card.id === idx);
  console.log(cards);
  const {
    img,
    category,
    category_color,
    title,
    title_color,
    bg_color,
    price,
    description,
  } = cards;
   

  const handleApplyService =()=>{
    saveServiceToLs(idx);
    toast('You donate successfully');
  }
  return (
    <div className="">
      <ToastContainer />
      <div className="w-[1280px] mx-auto relative ">
        <img src={img} alt="" />
        <div className="w-[1280px] absolute h-32 bg-slate-900  flex items-center bg-opacity-50 bottom-0  ">
          <button onClick={handleApplyService}
            style={{ backgroundColor: title_color }}
            className=" py-3 rounded-lg px-4 ml-10 text-white items-center "
          >
            Donate {price}
          </button>
        </div>
      </div>
      <div className="ml-[202px] my-4">
        <h1 className="font-bold text-2xl ">{title}</h1>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
