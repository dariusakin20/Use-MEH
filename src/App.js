import './Form.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Login } from './Login';
import { TodoWrapper } from './TodoWrapper';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/app" element={<MainPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const MainPage = () => {
  const [quotes, setQuotes] = useState({ text: '', author: '' });

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes({
          text: data[randomNum].text,
          author: data[randomNum].author,
        });
      });
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div className="App">

      <h1 className='headerText'>UseMEH</h1>
    
      <div className="wrapAround">
      <h1 className='headerText'>Daily Quotes</h1>
        <p>{quotes.text}</p>
        <p>Author: {quotes.author}</p>
        <div className='btnContainer'>
          <button onClick={getQuote} className='buttons'>New quote</button>
          {quotes.text !== '' && (
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes.text)}`}
              target="_blank"
              rel='noopener noreferrer'
              className='buttonsRed'
            >
              Post on X
            </a>
          )}
        </div>
      </div>
      <TodoWrapper />
    </div>
  );
}

export default App;
