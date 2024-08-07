import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const track = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", track);

    return () => {
      window.removeEventListener("resize", track);
    };
  });

  return size; 
};
