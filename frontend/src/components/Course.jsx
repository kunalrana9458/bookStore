import React from "react";
import list from "../../public/list.json"
import Cards from "../components/Cards"
import { Link } from "react-router-dom";

const Course = () => {
  const filterData = list.filter((item) => (item.category !== "Free"));
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We' are delighted to have to
            <span className="text-pink-500"> Here! :) </span>
          </h1>
          <p className="my-12 t">
            "Welcome to our paid book section, where an array of captivating
            reads awaits. Delve into gripping psychological thrillers,
            heartwarming romance novels, and timeless classics carefully curated
            for your enjoyment. Whether you're seeking adventure, mystery, or
            profound reflections on life, each title promises to captivate your
            imagination and transport you to new worlds. Explore our selection
            and indulge in the joy of reading, discovering stories that resonate
            deeply with your interests and preferences."
          </p>
          <Link to='/'>
          <button
            className="bg-pink-500 text-white px-4 py-2
        rounded hover:bg-pink-700 duration-300"
          >
            Back
          </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {
            filterData.map((item) => (
              <Cards item={item} key={item.book_id}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
