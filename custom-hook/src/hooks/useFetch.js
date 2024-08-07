import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_REQUEST, LOCAL_STORAGE } from "../utils/actionTypes";
import { useDebounce } from "../hooks/useDebounce";

export const useFetch = () => {
  const dispatch = useDispatch();
  const debounceUrl = useDebounce(
    "https://api.artic.edu/api/v1/artworks/search?q=cats",
    1000
  );

  useEffect(() => {
 
    const getData = async (url) => {
      dispatch({ type: API_REQUEST.LOADING });
      dispatch({ type: LOCAL_STORAGE.LOADING });

      try {
        const res = await axios.get(url);
        dispatch({ type: API_REQUEST.SUCCESS, payload: res.data.data });
        dispatch({ type: LOCAL_STORAGE.SUCCESS, payload: res.data.data });
      } catch (err) {
        dispatch({ type: API_REQUEST.ERROR });
        dispatch({ type: LOCAL_STORAGE.ERROR });
      }
    };

    if (debounceUrl) {
      getData(debounceUrl);
    }
  }, [debounceUrl, dispatch]);
};
