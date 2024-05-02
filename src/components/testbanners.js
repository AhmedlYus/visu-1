import React from "react";
import '../styles/testBanner.css';

const MovieCard = ({ title, text, exhibitionArea, bookNowLink, image }) => (
  <div className="poster-container">
    <div className="info-container">
      <div className="info">
        <h2 className="movie-title">{title}</h2>
        <p className="text">{text}</p>
        <div className="movie-meta">
          <div className="exhibition-details">
            <div className="exhibition-label">Exhibition</div>
            <div className="exhibition-area">{exhibitionArea}</div>
          </div>
          <a href={bookNowLink} className="book-now-link">
            Book now
          </a>
        </div>
      </div>
    </div>
    <div className="movie-image">
      <img src={image} alt={title} className="movie-poster" />
    </div>
  </div>
);

const CardBanners = ({ cards }) => (
  <main className="movie-showcase">
    <div className="movie-list">
      {cards.map((card, index) => (
        <MovieCard key={index} {...card} />
      ))}
    </div>
  </main>
);

export default CardBanners;
