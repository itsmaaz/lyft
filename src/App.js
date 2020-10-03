import React from 'react';
import './App.css';
import Header from './Header';
import CircleImages from './CircleImages'
import ArticleCards from './ArticleCards'
import Card from './Card'

function App() {
  return (
    <div className="App">
      <Header />
      <CircleImages/>
      <ArticleCards />
      <Card/>
    </div>
  );
}

export default App;
