import React from "react";
import { Col, Container } from "react-bootstrap";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Topbar = () => {
  const items = useSelector((state)=>state.cart.CartData);

  return (
    <>
      <section className="bg-secondary py-2">
        <Container>
          <div 
          className="d-flex justify-content-between align-items-center fixed-top bg-secondary px-5"
          >
            <div>
              <h1 className="text-white">MN</h1>
            </div>
            <div>
              <Link to="/cart">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  <BsHandbag />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {items.length}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
