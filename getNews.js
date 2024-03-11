import { config } from "dotenv";
import axios from "axios";

config();

let BASE_URL = "https://newsapi.org/v2/top-headlines";

const getNews = async () => {
  const response = await axios.get(
    `${BASE_URL}?country=us&apiKey=${process.env.NEWS_API}`
  );

  return response.data.articles;
};

export default getNews;
