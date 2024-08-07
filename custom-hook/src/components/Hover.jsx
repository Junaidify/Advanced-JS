import {} from "react";
import { useHover } from "../hooks/useHover";

const Hover = () => {
  const { onMouse, onMouseEnter, onMouseLeave } = useHover();

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <p>{onMouse ? "Hover" : "Not Hover"}</p>
    </div>
  );
};

export default Hover;
