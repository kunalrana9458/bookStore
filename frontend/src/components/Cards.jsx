import React from "react";

const Cards = ({item}) => {
  // console.log(item);
  return (
    <>
      <div className="my-10 flex items-center justify-center hover:scale-[1.1] duration-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure> 
            <img
              className="h-[400px] w-[400px]"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p> {item.title} </p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-150 cursor-pointer py-1">FREE</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-150 cursor-pointer py-1">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
