// import React from 'react';

// const productData = [
//   {
//     id: 1,
//     img: "https://example.com/image1.jpg",
//     category: "Electronics",
//     categoryColor: "bg-orange-500", // Original category color
//     title: "Smartphone",
//     titleColor: "text-gray-800", // Original title color
//     backgroundColor: "bg-gray-100", // Original background color
//     price: "$499",
//     description: "A powerful smartphone with advanced features.",
//   },
//   // ... other product data
//   {
//     id: 15,
//     img: "https://example.com/image15.jpg",
//     category: "Toys",
//     categoryColor: "bg-indigo-500", // Original category color
//     title: "Building Blocks",
//     titleColor: "text-gray-800", // Original title color
//     backgroundColor: "bg-gray-100", // Original background color
//     price: "$19",
//     description: "Spark creativity and imagination with these classic building blocks.",
//   },
// ];

// const ProductCard = ({ product }) => {
//   // Function to determine alternative background color based on category color
//   const getBackgroundColor = (categoryColor) => {
//     const colorParts = categoryColor.split("-");
//     const colorValue = colorParts[1];

//     // Check if color is black, white, or gray
//     if (
//       colorValue === "black" ||
//       colorValue === "white" ||
//       colorValue.startsWith("gray")
//     ) {
//       // Use a contrasting color if black, white, or gray
//       return `bg-${colorValue === "black" ? "yellow" : "blue"}-500`;
//     } else {
//       return categoryColor; // Use the original category color otherwise
//     }
//   };

//   return (
//     <div
//       className={`p-4 rounded-lg shadow-md overflow-hidden ${getBackgroundColor(
//         product.categoryColor
//       )}`} // Set background color based on category color
//     >
//       <img
//         src={product.img}
//         alt={product.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="pt-4 pb-2 px-4">
//         <h3
//           className={`text-lg font-medium text-center ${product.titleColor}`} // Set title color based on original title color
//           style={{ backgroundColor: getBackgroundColor(product.categoryColor) }} // Override title background with category background (excluding black, white, gray)
//         >
//           {product.title}
//         </h3>
//         <p className="text-sm text-gray-700 mt-2">{product.description}</p>
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-base font-medium">{product.price}</span>
//           <button
//             className={`px-3 py-2 rounded-md text-sm font-medium text-center ${getBackgroundColor(
//               product.categoryColor
//             )} text-white`} // Set button background with category background (excluding black, white, gray)
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//       {productData.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default App;



import React from 'react';
import  { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getServiceFromLs } from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';
const Statistics = () => {



let data = [];

const services = useLoaderData();

data.push(services.length)
const storedServices = getServiceFromLs();
data.push(storedServices.length)

console.log(data);






const COLORS = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


    return (
        <div>
            <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  
        </div>
    );
};

export default Statistics;
