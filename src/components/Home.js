// Home.js
import React from 'react';

const Home = ({ quote, generateQuote, copy, shareOnWhatsApp, shareOnTwitter }) => {
  return (
    <div className="container">
      <p>{quote.content}</p>
      <span>{quote.author}</span>
      <div className="btns">
        <button onClick={copy} className="btn">Copy</button>
        <button onClick={generateQuote}>Generate Another Quote</button>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
        <button onClick={shareOnTwitter}>Share on Twitter</button>
      </div>
    </div>
  );
};

export default Home;
