import React, { useEffect, useState } from "react";
import { Button, Row, Col,Container } from "react-bootstrap"
import { getNews, getEthValue } from "../actions/api";
import Hero from "../components/hero";
import Eth from "../components/Eth";
import NewsSection from "../components/NewsSection";

const HomeScreen = () => {
  const [fetchedNews, setFetchedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ethValue, setEthValue] = useState(null);

  const fetchEthValue = async () => {
    const { data } = await getEthValue();
    setEthValue(data.price);
  };

  
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
    fetchEthValue();
    setLoading(true);
  }, []);

  const refresh = () => {
    fetchNews();
    fetchEthValue();
  }


  return (
    <>
      <Hero />
      <Container style={{padding: '10px'}}>
        <Row>
          <Col md={4} ><Eth value={ethValue}/></Col>
          <Col md={{ span: 4, offset: 4 }}> <Button variant="primary" onClick={refresh}>Get new updates</Button>{' '}</Col>
        </Row> 
      </Container>
      <NewsSection loading={loading} fetchedNews={fetchedNews} />
    </>
  );
};

export default HomeScreen;
