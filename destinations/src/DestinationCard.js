import React from 'react';

const Card = ({ title, url, caption }) => (
  <div>
    <h1>{title}</h1>
    <img src={url} alt="" />
    <h3>{caption}</h3>
  </div>
);

export default Card;
