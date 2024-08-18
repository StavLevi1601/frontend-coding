import axios from "axios";

export const fetchApi = async () => {
  try {
    const url = await axios.get("https://randomuser.me/api/");
    console.log(url.data);

    return url.data; // Return the object, not a string
  } catch (error) {
    console.error(error);
  }
};
