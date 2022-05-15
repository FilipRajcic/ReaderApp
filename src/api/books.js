import axios from "axios";
// Setting up axios for books ajax call
export default axios.create({
  baseURL: "http://openlibrary.org",
  params: {
    limit: 10,
  },
});
