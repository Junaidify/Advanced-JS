import { useEffect, useMemo } from "react";
import { API_FETCH } from "../constants/actionTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

export const useFetch = (apiEndpoint, fetched) => {
  const dispatch = useDispatch();

  const ApiAcion = useMemo(() => {
    switch (apiEndpoint) {
      case "tasks":
        return API_FETCH.TASKS;
      case "users":
        return API_FETCH.USER;
      default:
        return API_FETCH.TASKS;
    }
  }, [apiEndpoint]);

  useEffect(() => {
    dispatch({ type: ApiAcion.LOADING });
    axios
      .get(`http://localhost:3000/${apiEndpoint}`)
      .then((res) => {
        dispatch({ type: ApiAcion.SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ApiAcion.ERROR });
        console.log(err);
      });
  }, [fetched, ApiAcion, apiEndpoint, dispatch]);
};
