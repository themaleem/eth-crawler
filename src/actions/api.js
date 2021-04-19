import axios from "axios";

const instance = axios.create({
  baseURL: "https://eth-crawler.herokuapp.com/api",
});

export const getNews = () => instance.get("/crypto-news");


export const getEthValue = () => instance.get("/eth-price");
