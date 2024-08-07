import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

const Timeout = () => {
  const [count, setCount] = useState(0);

  const callback = () => {
    setCount((prev) => prev + 1);
  };
  const { reset, clear } = useTimeout(callback, 2000);

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
};

export default Timeout;
