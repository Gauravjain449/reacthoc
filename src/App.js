import React from 'react';
import './App.css';
import File1 from './HOC/File1'
import File2 from './HOC/File2';
import BookList from './Redux/containers/bookList';
import Bookdetails from './Redux/containers/bookdetails';

function App() {
  return (
    <div className="App">
      <File1 city="Ludhiana" />
      <File2 city="Nasik" />
      <BookList />
      <Bookdetails />
    </div>
  );
}

export default App;
