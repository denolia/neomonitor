import axios from "axios";
import { InputData, TableDefinition } from "../types";

export async function runSearch({
  model, environment, input, setResult,
}: InputData & {setResult: (res: TableDefinition[]) => void}) {
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
  if (res?.data) {
    setResult(res.data.tables);
  }
  return res;
}
