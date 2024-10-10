import React, { useState } from "react";
import Slider from "react-slick";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Data from "../Data";
import { FaHeart } from "react-icons/fa";
// import { MdTrain } from "react-icons/md";

import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import ShopHeader from "./ShopHeader";

const ShopComponent = ({data, search, header, title, liked, setLiked}) => {

  const main = Data.filter(item=>item.category === search)

  const slider = React.useRef(null);


  const addLiked = (id) => {
    const newItem = Data.filter(item => item.id === id)[0];
    if (Array.isArray(liked)) {
      setLiked([...liked, newItem]); 
    } else {
      console.error("Liked is not an array:", liked);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    arrows: false,
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

  return (
    
    <div className="my-5">
      <div className="container2">
        <ShopHeader
          header={header}
          title={title}
          slider={slider}
        />
        <div className="all-items mt-3">
          <div className="slider-container">
            <div>


              <Slider ref={slider} {...settings}>

                {
                  main.map(item => {
                    return (
                      <div key={item.id} className="item ">
                    {/* =======PRODUCT IMAGE STARTS HERE======= */}
                        <div className="item-image rounded d-flex align-items-center justify-content-center">
                          <img src={item.image} loading="lazy" alt="" />

                          {
                            item.discount ? (<small className="discount">-{item.discount}%</small>) : ""
                          }
                          <button className="add-to-cart  align-items-center gap-2"><GrCart /> Add To Cart</button>
                          <div className="action d-flex flex-column gap-2">
                              <button className="round hover bg-white" onClick={() => addLiked(item.id)}>
                                  <CiHeart size={20} color="red" />
                              </button>
                              {/* <button className="round hover bg-white" onClick={() => addLiked(item.id)}>
                                  <FaHeart size={20} lightingColor="black" color="white" />
                              </button> */}
                              <button className="round hover bg-white">
                              <IoEyeOutline size={20} />
                              </button>
                          </div>
                        </div>

                          {/* =======PRODUCT CONTENT STARTS HERE======= */}
                        <div className="item-details pt-2">
                          <Link to={`/shop/${item.name}`} className="fw-bolder nav-link">{item.name}</Link>
                          <div className="price d-flex align-items-center gap-3">
                            
                              <small className={item.discount ? "strike" : ""}>${item.price}</small>
                              {
                                item.discount ? <small className="">${`${item.price - item.discount/100 * item.price}`}</small> : ""
                              }
                              
                          </div>
                          <div className="star d-flex align-items-center gap-3">
                              <img src="../../Images/stars.png" width={70} alt="" />
                              <small>({item.totalRating})</small>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

               


                
                

               
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
