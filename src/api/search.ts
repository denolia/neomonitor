import axios from "axios";
import { InputData } from "../types";

export async function runSearch({ model, environment, input }: InputData) {
  let res;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}search`,
      { model, environment, input },
    );
  } catch (error) {
    console.log(error);
  }
  console.log({ res });
  return res;
}
