import axios from "axios";

export default axios.create({
  baseURL: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/TMdHvdgJYFn7Pvjhe7cs1A`,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` }
});
