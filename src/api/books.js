import axios from "axios";
// Setting up axios for books ajax call
export default axios.create({
  // baseURL Link for openlibrary
  baseURL: "https://openlibrary.org",
  params: {
    // adding limit to 10 bcs i dont want more than 10
    limit: 10,
  },
});
