import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Container } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { remove } from "../../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const carData = useSelector((state) => state.cart.CartData);
  console.log(carData);
  const handleRemove = (carDataID) => {
    dispatch(remove(carDataID));
  };
  return (
    <>
      <Container>
        <h1 className="text-center my-4">Cart</h1>
        {carData.map((carData) => {
          return (
            <>
              <div className="shadow py-3 px-5 my-3 rounded-pill">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src={carData.thumbnail}
                      alt=""
                      className="product_img"
                    />
                  </div>
                  <div className="ms-5 text-capitalize title_bg">
                    {carData.title}
                  </div>
                  <div>
                    {/* <Counter /> */}
                    {carData.quantity}
                  </div>
                  <div className="ms-5 text-capitalize title_bg">
                    $ {carData.price}
                  </div>
                  <div className="ms-5 text-capitalize title_bg">
                    ${carData.price * carData.quantity}
                  </div>
                  <div className="ms-auto">
                    
                    <button
                      onClick={() => handleRemove(carData.id)}
                      className="bg-transparent border-0"
                    >
                      <RxCross1 />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div className="d-flex justify-content-center">
          <Link
            to="/"
            className="bg-success text-light text-decoration-none py-2 px-4 rounded-1"
          >
            go home
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;
