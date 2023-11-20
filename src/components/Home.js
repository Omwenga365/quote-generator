// Home.js
import React from 'react';

const Home = ({ quote, generateQuote, copy, shareOnWhatsApp, shareOnTwitter }) => {
  // Check if quote is undefined or null before accessing its properties
  if (!quote) {
    return (
      <div>
        Loading quote...
      </div>
    );
  }

  return (
    <div>
      <p>{quote.content}</p>
      <span>{quote.author}</span>
      <div>
        <button onClick={copy}>Copy</button>
        <button onClick={generateQuote}>Generate Another Quote</button>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
        <button onClick={shareOnTwitter}>Share on Twitter</button>
      </div>
    </div>
  );
};

export default Home;
