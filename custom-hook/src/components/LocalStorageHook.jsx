import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { usePrevious } from "../hooks/usePrevious";

const LocalStorageHook = () => {
  const cats = useSelector((state) => state.localStorage.data);
  useFetch();

  return (
    <>{cats && cats.map((cat) => <Cat key={cat.id} title={cat.title} />)}</>
  );
};

// eslint-disable-next-line react/prop-types
const Cat = ({ title }) => {
  const prev = usePrevious(title);
  return (
    <div>
      <p>
        {" "}
        Previous:{" "}
        <span style={{ fontSize: "20px" }}>{prev|| "Invalid" }</span>
      </p>
      <p>
        {" "}
        current: <span style={{ fontSize: "20px" }}>{title}</span>{" "}
      </p>
    </div>
  );
};

export default LocalStorageHook;
