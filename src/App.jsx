import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import AboutView from './components/AboutView.jsx';
import SearchView from './components/SearchView';
import MovieDetails from './components/MovieDetails.jsx';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (searchText) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setSearchResults(json.results);
        })
        .catch(err => console.error(err));
    }
  }, [searchText]);


  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
