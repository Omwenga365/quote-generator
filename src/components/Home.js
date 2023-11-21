// Home.js
import React, { useEffect } from 'react';
import './Home.css'; // Import your stylesheet

const Home = ({ quote, generateQuote, copy, shareOnWhatsApp, shareOnTwitter }) => {
  useEffect(() => {
    // Fetch a new quote when the component mounts
    generateQuote();
  }, [generateQuote]); // Run only when generateQuote changes

  if (!quote) {
    // If quote is undefined, display a loading message
    return (
      <div className="loading-message">
        Loading quote...
      </div>
    );
  }

  return (
    <div className="quote-container">
      <p className="quote-content">{quote.content}</p>
      <span className="quote-author">{quote.author}</span>
      <div className="button-container">
        <button onClick={copy}>Copy</button>
        <button onClick={generateQuote}>Generate Another Quote</button>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
        <button onClick={shareOnTwitter}>Share on Twitter</button>
      </div>
    </div>
  );
};

export default Home;
