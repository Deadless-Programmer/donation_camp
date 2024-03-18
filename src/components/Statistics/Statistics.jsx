import React, { useEffect } from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { getServiceFromLs } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  // const data = [
  //   {  value3: 400 },
  //   {  value3: 300 },

  // ];

  const services = useLoaderData();

  const totalDonation = services.length;
  const storedServices = getServiceFromLs();
  const yourDonation = storedServices.length;

  // console.log(data);

  let data = [];
  function addObjectWithKeyValue(arr, key, value) {
    // Create a new object with the key-value pair
    let newObj = {};
    newObj[key] = value;

    // Push the new object into the array
    arr.push(newObj);
  }

  addObjectWithKeyValue(data, "Donation", totalDonation);
  addObjectWithKeyValue(data, "Donation", yourDonation);
  // addObjectWithKeyValue(data, 'name', 'dalton', 'age', 10);
  // addObjectWithKeyValue(data, 'name', 'kenedi', 'age', 12);

  console.log(data);

  const COLORS = ["#0088FE", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  // console.log(productLength)
  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          Toolti
          fill="#8884d8"
          dataKey="Donation"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>

      <div>
        <h1 className=" font-bold text-lg flex items-center ">
          Total Donation <div className="bg-blue-600 w-10 h-2 mt-1"></div>{" "}
        </h1>
        <h2 className=" font-bold text-lg flex items-center">
          My Donation <div className="bg-green-500 w-10 h-2 mt-1"></div>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Statistics;
