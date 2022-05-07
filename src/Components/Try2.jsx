import React from 'react';

const Try2 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const result=fruits.filter((item)=>item.length===3)
  console.log(result);
    return (
        <div>
            filter
        </div>
    );
};

export default Try2;