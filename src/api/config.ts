import axios from "axios";

export async function getConfiguration() {
  let res;
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}configuration`,
      {},
    );
  } catch (error) {
    console.log(error);
  }
  console.log({ res });
  return res;
}
