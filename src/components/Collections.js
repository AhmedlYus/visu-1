import React from 'react'
import '../styles/collections.css';

const CollCards = ({ image, title, description, bookNowLink }) => {
 
  return(
  <a href={bookNowLink} className="Collections-link">
    <div className="collection-container">
      <div className="collectionbox-container">
        <div className='info-collections'>
        <h3 className="collection-card-title">{title}</h3>
          <div className='collection-img-container'>
          <img src={image} alt={title} className="Collections-card-image" />
          </div>
      <div className="collection-card-content">
        <p className="collection-card-description">{description}</p>
      </div>
        </div>
      </div>
    </div>
  </a>
  );
};

const Collections = ({ collectionCards }) => {
  return (
    <section className="collection-section">
      <div className="collection-grid">
        {collectionCards.map((card, index) => (
          <CollCards key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Collections;
