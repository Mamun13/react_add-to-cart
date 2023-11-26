import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import { add } from "../../store/CartSlice";
import { useDispatch } from "react-redux";



const ProductCard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const response = await res.json();
    setData(response.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleclick = (curElem) => {
    dispatch(add(curElem));
  };

 

  return (
    <>
      <Container className="pt-5">
        <Row>
          {data.map((curElem) => {
            return (
              <>
                <Col lg={3} className="my-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={curElem.thumbnail}
                      className="product_card_img"
                    />
                    <Card.Body>
                      <Card.Title>{curElem.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <p className="text-capitalize fw-bold">
                          price : {curElem.price}$
                        </p>
                      </Card.Text>

                      <Button variant="primary" onClick={() => handleclick(curElem)}>
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductCard;
