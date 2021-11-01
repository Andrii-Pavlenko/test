import { useEffect, useState } from "react";

type Time = number;

type UseTimer = (initialTimeSeconds: Time) => Time;

export const UseTimer = (int: number) => {
  const [state, setState] = useState(int);

  const timer = () =>
    setInterval(() => {
      if (state > 0) {
        setState((prevState: number) =>
          prevState - 1 > 0 ? prevState - 1 : 0
        );
      }
    }, 1000);

  useEffect(() => {
    timer();
  }, []);

  return state;
};
