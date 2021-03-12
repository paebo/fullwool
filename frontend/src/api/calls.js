import axios from "axios";

export const fetchItemsApi = async () => {
  return await axios.get("http://localhost:8080/fullwool");
};
