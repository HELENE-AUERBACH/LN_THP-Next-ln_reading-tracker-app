import React from 'react';
import './Book.css';

const Book = ({ data, toggleFavBook, toggleToReadBook }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="image">
          <img src={data.thumbnailUrl} alt={data.thumbnailUrl !== undefined ? "Couverture nommée " + data.thumbnailUrl : "[None thumbnailUrl]"} />
        </div>
        <div className="header">{data.title}</div>
        <div className="description">
          {data.shortDescription !== undefined ? data.shortDescription : "[None short description]"}
        </div>
        <div className="extra">
          <div className="two-buttons">
            <button className="basic-button green-basic-button" onClick={(toggleFavBook)}>Ajouter ce livre en favoris</button>
            <button className="basic-button red-basic-button" onClick={(toggleToReadBook)}>Ajouter ce livre à ceux à lire</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
