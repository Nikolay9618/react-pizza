import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Cart from "./pages/Cart";
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';


export const SearchContext = React.createContext();

function App() {



  const [searchValue, setSearchValue] = useState('');


  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
