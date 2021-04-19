import React, { useEffect, useState } from "react";

import { getNews } from "../actions/api";

import Hero from "../components/hero";
import NewsSection from "../components/NewsSection";

const HomeScreen = () => {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    await setLoading(true);
    const { data } = await getNews();
    setFetchedNews(data.articles);
    setTimeout(() => {
      setLoading(true);
    }, 1000);

    setLoading(false);
  };

  useEffect(() => {
    fetchNews();

    setLoading(true);
  }, []);

  return (
    <>
      <Hero />
      <NewsSection loading={loading} fetchedNews={fetchedNews} />
    </>
  );
};

export default HomeScreen;
