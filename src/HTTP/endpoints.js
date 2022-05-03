import axios from "axios";
import { ACTIVE_CAMPAIGN_BASE_URL, API_KEY } from "./urls";

export const postContactInList = async (payload) => {
  if (!payload) throw new Error("Payload is required");
  const res = await axios.post("http://localhost:8080/", payload);

  return res;
};
