import React from 'react';
import './App.css';
import File1 from './HOC/File1'
import File2 from './HOC/File2';
import BookList from './Redux/containers/bookList';
import Bookdetails from './Redux/containers/bookdetails';
import { cookies } from './Cookies/cookies';

function App() {
  return (
    <div className="App">
      <File1 city="Ludhiana" />
      <File2 city="Gurgaon" />
      <BookList />
      <Bookdetails />
      {
        console.log(cookies.get('myCat'))
      }
    </div>
  );
}

export default App;
