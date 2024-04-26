import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
  const [books,setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try{
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getBooks();
  },[])
  const filterData = books.filter((data) => (data.category === "Free"));
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  // console.log(filterData);
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div>
           <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
            <p>
            "Free offer books provide readers with a treasure trove of literary gems
             without breaking the bank, offering a diverse selection of titles across
              genres for every avid reader to enjoy. From timeless classics to contemporary 
              bestsellers, these complimentary reads open doors to new worlds and enrich minds without cost."
            </p>
        </div>
        <div>
        <Slider {...settings}>
           {
            filterData.map((item) => (
              <Cards item={item} key={item.book_id} />
            ))
           }
        </Slider>
        </div>
    </div>
    </>
  )
}

export default FreeBook
