import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";

const Football = () => {
  const [page, setPage] = useState(1);
  useFetch(page);
  const fetchData = useSelector((state) => state.fetch.data);
  //   console.log(fetchData);

  useEffect(() => {
    setPage(fetchData.page);
  }, [fetchData]);

  const handlePrev = () => {
    page > 1 && setPage((prev) => prev - 1);
    console.log(page);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
    <h1 style={{textAlign: "center", fontSize: '2rem', fontWeight: "bold", margin: "10vh auto 5vh",}} >Football Matches</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2vh 1vw",
          width: "80%",
          margin: "2vh auto",
        }}
      >
        {fetchData.data &&
          fetchData.data.map((item, idx) => (
            <div
              key={idx}
              style={{ border: "2px solid black", padding: "2vh 1vw", borderRadius: "10px" }}
            >
              <p>
                <strong style={{fontSize: '1.1rem'}}>Team-01: </strong> {item.team1}
              </p>
              <p>
                <strong>Team-02: </strong> {item.team2}
              </p>
              <p>
                <strong>Year: </strong> {item.year}
              </p>
              <p>
                <strong>Competition:</strong> {item.competition}
              </p>
              <p>
                <strong>Round: </strong> {item.round}
              </p>
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handlePrev}
          style={{
            marginRight: "1vw",
            padding: "1vh 1.5vw",
            fontSize: "1.5vh",
            fontWeight: "bold",
          }}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          style={{
            marginLeft: "1vw",
            padding: "1vh 1.5vw",
            fontSize: "1.5vh",
            fontWeight: "bold",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Football;
