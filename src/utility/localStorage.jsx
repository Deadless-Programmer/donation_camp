const getServiceFromLs = ()=>{
    const storedService = localStorage.getItem("servises");
    if(storedService){
        return JSON.parse(storedService);
    }
    return [];
}




const saveServiceToLs =(id)=>{
         const storedServices = getServiceFromLs();
         const exists = storedServices.find(serviceId => serviceId ===id);
         if(!exists){
            storedServices.push(id)
            localStorage.setItem("servises", JSON.stringify(storedServices))
         }
         console.log(storedServices)
}

export{saveServiceToLs, getServiceFromLs}