import {} from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const WindowResize = () => {
  const size = useWindowSize();
  return (
    <div>
      <p>
        <strong>Width: </strong>
        {size.width}
      </p>
      <p>
        <strong>height: </strong>
        {size.height}
      </p>
    </div>
  );
};

export default WindowResize;
