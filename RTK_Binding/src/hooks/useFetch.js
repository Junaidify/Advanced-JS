import { useEffect } from "react";
import { setData, setError, setLoading } from "../utils/fetchReducer";
import axios from "axios";
import { useDispatch } from "react-redux";

export const useFetch = (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading());
      try {
        const res = await axios.get(
          `https://jsonmock.hackerrank.com/api/football_matches?page=${page}`
        );
        dispatch(setData(res.data));
      } catch (err) {
        setError(setError(err.toString()));
      }
    };
    getData();
  }, [dispatch, page]);
};
