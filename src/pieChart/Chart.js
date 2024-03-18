function addObjectWithKeyValue(arr, key, value) {
    // Create a new object with the key-value pair
    let newObj = {};
    newObj[key] = value;
    
    // Push the new object into the array
    arr.push(newObj);
}

export{addObjectWithKeyValue}