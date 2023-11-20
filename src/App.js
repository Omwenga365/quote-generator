// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';

const App = () => {
  const url = "https://api.quotable.io/random";
  
  // Placeholder values for state variables
  const [quote, setQuote] = useState({
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  });

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
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
    <Router>
      <>
        <h1>Quote Generator React App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </nav>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              {...props}
              quote={quote}
              generateQuote={generateQuote}
              copy={copy}
              shareOnWhatsApp={shareOnWhatsApp}
              shareOnTwitter={shareOnTwitter}
            />
          )}
        />
        <Route path="/favorites" component={Favorites} />
      </>
    </Router>
  );
};

export default App;
