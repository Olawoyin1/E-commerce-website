import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Data from "../Data";
import { MdTrain } from "react-icons/md";

import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const ShopComponent = ({data,header , title, liked, setLiked}) => {
  const [display, setDisplay] = useState(true);

  const main = Data.filter(item=>item.category === header)


  const addLiked = (id) => {
    const newItem = Data.filter(item => item.id === id);
    console.log(newItem);
    setLiked([...liked, newItem]);
    console.log("Item ID:", id);
    // You can add any functionality here, like updating state
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

  const slider = React.useRef(null);
  return (

    
    <div className="my-5">
      <div className="container2">
        <div className="cat">
          <small className="ms-4 fw-bold cat-label">{header}</small>
        </div>
        <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
          <h3 className="fw-bold ">{title}</h3>
          <div className="d-flex align-items-center gap-2">
            <button 
                className="round" 
                onClick={() => slider?.current?.slickPrev()}
            ><IoIosArrowRoundBack size={20} /></button>
            <button 
                onClick={() => slider?.current?.slickNext()}
                className="round"
            ><IoIosArrowRoundForward size={20} /></button>
          </div>
        </div>
        <div className="all-items mt-3">
          <div className="slider-container">
            <div
              style={{
                display: display ? "block" : "none",
              }}
            >

              

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
                                  <CiHeart size={20} />
                              </button>
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
