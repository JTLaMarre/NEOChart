import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/searchform';
import Container from 'react-bootstrap/Container';
import Directions from './components/directions';


function App() {
  return (
    <Container>
    <div className="App">
    <Directions/>
     {/* form to set query for axios call to the NASA api */}
     <SearchForm/>
     {/* set the NEO data for query to a data state */}
     {/* use chart.js to create a chart that displays stats on the NEOs pie chart of how many are what sizes  answer if any potentially dangerous asteroids*/}
    </div>
    </Container>
  );
}

export default App;
