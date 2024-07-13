import React, { useState, useEffect } from "react";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 100))); 
  }, []);

  return (
    <div className="card-list">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h1 className="font-bold">{item.title}</h1>
          <p>{item.userId}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
