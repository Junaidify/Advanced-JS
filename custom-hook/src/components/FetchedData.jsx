import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const FetchedData = () => {
  const cats = useSelector((state) => state.fetch.data);
  useFetch();
  return (
    <>
      {cats &&
        cats.map((cat) => (
          <div key={cat.id}>
            <p>{cat.title}</p>
          </div>
        ))}
    </>
  );
};

export default FetchedData;
