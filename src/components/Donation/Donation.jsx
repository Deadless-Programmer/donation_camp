import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getServiceFromLs } from '../../utility/localStorage';
import DonationCard from './DonationCard';

const Donation = () => {
    const services = useLoaderData();
    // const {id}= useParams();

    const [servicesList, setServicesList] = useState([]);
    const [showData, setShowData]=useState(2);
useEffect(()=>{
    const storedServices = getServiceFromLs();
    console.log(storedServices.length)
    
    if(services.length > 0){
              let serviceApplied =[];
              for (let id of storedServices) {
                const appliedService = services.find(service=> service.id ===id);
          if(appliedService){
               serviceApplied.push(appliedService)
           }
        }
            
              setServicesList(serviceApplied )
        }

    // console.log(allServices)
},[])
// console.log(servicesList)
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  place-items-center		'>
          {
            servicesList.slice(0, showData).map(serviceCard=><DonationCard key={serviceCard.id} serviceCard={serviceCard}></DonationCard>)
          }


        </div>
        <div className={`${showData ===servicesList.length && "hidden"}  text-center my-5` }>
        <button className="btn btn-primary " onClick={() => setShowData(servicesList.length)}>Show All</button>
      </div>
        </>
        
    );
};

export default Donation;