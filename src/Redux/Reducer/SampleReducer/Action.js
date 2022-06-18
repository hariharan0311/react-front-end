import { SAMPLE } from "../SampleReducer/ActionType";
import axios from "axios";

export const postFunc = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/get/user", {
        crossDomain: true,
      })
      .then((result) => {
        dispatch({ type: SAMPLE.post, payload: result.data.data });
      })
      .catch((error) => {});
  };
};
