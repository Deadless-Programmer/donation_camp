import React, { useEffect, useState } from "react";
import Card from "./Card";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  const [originalDatas, setOriginalDatas] = useState([]);
  const [datas, setDatas] = useState([]);
  const [product, setProductLengt] = useState(10);
  const [spiner, setSpiner] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("courseCampaing.json")
      .then((res) => res.json())
      .then((course) => {
        setDatas(course);
        setOriginalDatas(course);
        setSpiner(false);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Here you can implement your search logic, e.g., fetching data from an API
    // For simplicity, let's just filter some hardcoded data based on searchQuery
    // const filteredResults = your search logic, e.g., searchData.filter(item => item.name.includes(searchQuery))
    console.log(datas);
    const filteredResults = originalDatas.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

     setDatas(filteredResults) 

    // console.log(filteredResults);
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex gap-3 justify-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search here..."
                className="input input-bordered w-full max-w-xs"
              />
              <button
                onClick={handleSearch}
                className="bg-red-700 p-3 rounded-xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {
         console.log(datas.length)
      } */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-10">
        {datas.length > 0 ? (
          datas
            .slice(0, product)
            .map((data) => <Card data={data} key={data.id}></Card>)
        ) : (
          <h1 className="text-2xl text-red-500 font-semibold ">
            Product not found
          </h1>
        )}
      </div>
      <div className={`${product === datas.length && "hidden"}  text-center`}>
        <button
          className="btn btn-primary "
          onClick={() => setProductLengt(datas.length)}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;
