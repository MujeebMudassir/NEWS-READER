import React from "react";

const NewsItem = ({ article }) => {
  const { title, author, urlToImage, description, url, publishedAt } = article;

  // Create a Date object from the string
  const dateObject = new Date(publishedAt);

  // Format the date for display
  const formattedDate = dateObject.toLocaleString(); // Adjust the format as needed

  return (
    <article>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            urlToImage ||
            "https://c8.alamy.com/comp/KR049K/news-news-news-headline-concept-of-megafon-KR049K.jpg"
          }
          className="card-img-top"
          alt="news-image"
          style={{ maxHeight: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 30) + "........." : "no title"}
          </h5>
          <p className="card-text">
            {description
              ? description.slice(0, 70) + "......."
              : "no description"}
          </p>
          <p>Author : {author ? author.slice(0, 20) + "...." : "No Author"}</p>
          <p>Published on : {formattedDate}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;
