import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const ShopComponent = () => {
  const [display, setDisplay] = useState(true);
  // const [width, setWidth] = useState(600);

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
          <small className="ms-4 fw-bold cat-label">Categories</small>
        </div>
        <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
          <h3 className="fw-bold ">Flash Sales</h3>
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

                <div className="item ">
                    {/* =======PRODUCT IMAGE STARTS HERE======= */}
                  <div className="item-image rounded d-flex align-items-center justify-content-center">
                    <img src="../../Images/Frame 612 (1).png" alt="" />

                    <small className="discount">-40%</small>

                    <button className="add-to-cart">Add To Cart</button>

                    <div className="action d-flex flex-column gap-2">
                        <button className="round bg-white">
                            <CiHeart size={20} />
                        </button>
                        <button className="round bg-white">
                        <IoEyeOutline size={20} />
                        </button>
                    </div>
                  </div>

                    {/* =======PRODUCT CONTENT STARTS HERE======= */}
                  <div className="item-details pt-2">
                    <small className="fw-bold">HAVIT HV-G92 Gamepad</small>
                    <div className="price d-flex align-items-center gap-3">
                        <small>$120</small>
                        <small className="strike">$180</small>
                    </div>
                    <div className="star d-flex align-items-center gap-3">
                        <img src="../../Images/stars.png" width={70} alt="" />
                        <small>(77)</small>
                    </div>
                  </div>
                </div>


                
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
