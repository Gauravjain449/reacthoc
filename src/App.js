import React from 'react';
import './App.css';
import File1 from './HOC/File1'
import File2 from './HOC/File2';
import BookList from './Redux/containers/bookList';
import Bookdetails from './Redux/containers/bookdetails';
import { cookies } from './Cookies/cookies';
import AutoCompleteComponent from './AutoComplete/autoCompleteComponent';

function App() {
  return (
    <div>
      <div className="App">
        <File1 city="Ludhiana" />
        <File2 city="Gurgaon" />
        <BookList />
        <Bookdetails />
        {
          console.log(cookies.get('myCat'))
        }

      </div>
      <AutoCompleteComponent />
    </div>
  );
}

export default App;
