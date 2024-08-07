import { useEffect, useState } from "react";

export const useOnClickOutside = (componentClass) => {
  const [clickOut, setClickOut] = useState(false);

  useEffect(() => {
    const handleOutSide = (e) => {
      if (clickOut && !e.target.closest(`.${componentClass}`)) {
        setClickOut(false);
      }
    };

    document.addEventListener("mousedown", handleOutSide);

    return () => {
      document.removeEventListener("mousedown", handleOutSide);
    };
  }, [clickOut, componentClass]);

  return [clickOut, setClickOut];
};
