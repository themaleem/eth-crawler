import React, { useEffect } from "react";

import "./NewsSection.css";
import Spinner from "../components/Spinner";

const NewsSection = ({ fetchedNews, loading }) => {
  useEffect(() => {}, [fetchedNews, loading]);
  return (
    <div className="container">
      <div className="row">
        {fetchedNews.map((item, index) =>
          loading ? (
            <div key={index} class="col-lg-4 col-md-4 col-sm-6 pb-3">
              <div class="single-blog shadow-sm">
                <div class="blog-thumb"></div>
                <div class="blog-details">
                  <h5>
                    <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                  </h5>
                  <p>
                    {item.description.slice(0, 120)}...
                    <a href={item.link} target="_blank" rel="noreferrer">[readmore]</a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )
        )}
      </div>
    </div>
  );
};

export default NewsSection;
