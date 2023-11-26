import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  const [formvalue, setFormvalue] = useState(1);

  const increment = () => {
    setFormvalue(formvalue + 1);
  };
  const decrement = () => {
    if (formvalue > 0) {
      setFormvalue(formvalue - 1);
    }
  };
  return (
    <>
      <div className="ms-5 text-capitalize border">
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={decrement} className="border">
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            id=""
            className="text-center product_quantity border-0"
            value={formvalue}
          />
          <button onClick={increment} className="border">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
