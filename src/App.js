// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';

const App = () => {
  // ... (your existing code)

  return (
    <Router>
      <>
        <h1>Quote Generator React App</h1>
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
