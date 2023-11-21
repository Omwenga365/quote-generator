// Home.js
import React, { useEffect } from 'react';

const Home = ({ quote, generateQuote, copy, shareOnWhatsApp, shareOnTwitter }) => {
  useEffect(() => {
    // Fetch a new quote when the component mounts
    generateQuote();
  }, [generateQuote]); // Run only when generateQuote changes

  if (!quote) {
    // If quote is undefined, display a loading message
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
