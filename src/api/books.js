import axios from "axios";
// Setting up axios for books ajax call
export default axios.create({
  baseURL: "https://openlibrary.org",
  params: {
    limit: 10,
  },
});
