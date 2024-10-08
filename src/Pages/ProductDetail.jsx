import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import ShopComponent from "../components/ShopComponent";
import { useParams } from "react-router-dom";
import Data from "../Data";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";

const ProductDetail = () => {
  const { name } = useParams();

  const [count, setCount] = useState(0)


  const add = ()=> {
    setCount(prev=> prev + 1)
  }

  const minus = ()=> {
    setCount(prev=> prev - 1)
  }
  // console.log(name);

  const data = Data.filter((item) => item.name === name);

  return (
    <div className="product-details my-5">
      <div className="container2">
        {data.map((item) => {
          return (
            <div className="d-flex gap-4 flex-md-row flex-column">
                <div className="prod-image rounded d-flex align-content-center justify-content-center p-3 w-100">
                <img src={item.image} alt="" />
              </div>
              <div className="prod-details d-flex flex-column gap-3 w-100">
                <h4 className="fw-bold">{item.name}</h4>
                <div className="d-flex gap-2">
                  <img src="../../images/stars.png" width="40px" alt="" />
                  <small>(120 Reviews) | in Stock</small>
                </div>
                <p>${item.price}</p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, qui ad nulla asperiores magnam totam error dolore,
                  dolores quidem quasi blanditiis quam voluptatum odit assumenda
                  ea libero. Dicta, totam ratione.
                </small>
                <hr className="m-0 p-0" />
                <div className="sizes d-flex align-items-center gap-3">
                  <p>Size: </p>
                  <p className="size border p-2">XS</p>
                  <p className="size border p-2">S</p>
                  <p className="size border p-2">M</p>
                  <p className="size border p-2">L</p>
                  <p className="size border p-2">XL</p>
                </div>
                <div className="d-flex gap-4">
                  <div className="counter d-flex text-center align-items-center border">
                    <button onClick={minus} className="main-btn bg-dark hover text-white">
                      -
                    </button>
                    <p className="px-3">{count}</p>
                    <button onClick={add} className="main-btn bg-dark hover text-white">
                      +
                    </button>
                  </div>
                  <button className="main-btn w-50">Buy Now</button>
                  <button className="px-2">
                    <FaRegHeart />
                  </button>
                </div>

                <div className="border">
                    <div className="d-flex gap-2 p-3">
                        <TbTruckDelivery size={24} />
                        <div className="d-flex flex-column gap-1">
                            <p className="fw-bold">Free Delivery</p>
                            <small>Enter your postal code for Delivery Availability</small>
                        </div>

                    </div>
                    <hr className="m-0" />
                    <div className="d-flex p-3 gap-2">
                        <BsArrowRepeat size={24} />
                        <div className="d-flex flex-column gap-1">
                            <p className="fw-bold">Return Delivery</p>
                            <small>Free 30 Days Delivery Returns. Details</small>
                        </div>

                    </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ShopComponent header={"Home & Lifestyle"} title={"Featured"} />
    </div>
  );
};

export default ProductDetail;
