import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CocktailPage from './pages/CocktailPage';
import HomePage from './pages/HomePage';
import CocktailRandomPage from './pages/CocktailRandomPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path="/cocktail" element= {<CocktailPage/>} />
        <Route path="/coctailRandom" element= {<CocktailRandomPage/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
