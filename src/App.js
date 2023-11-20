import './App.css';
import React, { useState } from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content);
    alert('Copied');
  };

  
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(quote.author + " once said: " + quote.content);
    window.open(`https://api.whatsapp.com/send?text=${text}`);
  };

  
  const shareOnTwitter = () => {
    const text = encodeURIComponent(quote.author + " once said: " + quote.content);
    window.open(`https://twitter.com/intent/tweet?text=${text}`);
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
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
    </>
  );
};

export default App;
