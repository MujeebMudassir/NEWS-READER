import React from "react";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  const ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=260f551ea35242c8a7c94e708dfd4aae`;

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
