import React, { useEffect, useState } from "react";
import { Message } from "semantic-ui-react";
import { counterData } from "./data";


interface Data {
  value: number;
  children?: Data[];
}

const Counter = () => {
  const [state, setState] = useState(0);

  const count = (data: Data) => {
    if (data.value) {
      setState((prevState) => prevState + data.value);
    }

    if (data.children) {
      data.children.forEach((item: any) => count(item));
    }
  };

  useEffect(() => {
    count(counterData);
  }, []);

  console.log(state);

  return (
    <>
      <Message>{state}</Message>
    </>
  );
};

export default Counter;
