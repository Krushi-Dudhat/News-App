import React, { useEffect, useState } from "react";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2681dfef1d044c33850c45e0cf640448"
      );
      const data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginLeft: "2rem",
      }}
    >
      {mynews.map((ele, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img
            src={
              ele.urlToImage == null
                ? "https://static.politico.com/81/de/90521be84c8f8f57a87386b387fb/justice-department-gang-leader-94126.jpg"
                : ele.urlToImage
            }
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">
              {ele.title == "" ? "Janelle Ash" : ele.author}
            </h5>
            <p className="card-text">
              {ele.description
                ? ele.description.slice(0, 100) + "..."
                : "No description available."}
            </p>
            <a
              href={ele.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
