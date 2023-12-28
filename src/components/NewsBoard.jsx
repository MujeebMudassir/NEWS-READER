import React from "react";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useMediaQuery } from "react-responsive";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const isMobile768 = useMediaQuery({ maxWidth: 768 });
  const isMobile1000 = useMediaQuery({ maxWidth: 1000 });
  const envKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${envKey}`;

  const callApiForArticles = async () => {
    const response = await fetch(ApiUrl);
    const data = await response.json();
    setArticles(data.articles);
  };
  useEffect(() => {
    callApiForArticles();
  }, []);
  return (
    <>
      <h1 className="py-4" style={{ textAlign: "center" }}>
        News <span className="bg-danger badge">Board</span>{" "}
      </h1>
      <section className="articles-section">
        {articles ? (
          articles.map((article, index) => (
            <NewsItem key={index} article={article}></NewsItem>
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No Articles Were Found</h1>
        )}
      </section>
    </>
  );
};

export default NewsBoard;
