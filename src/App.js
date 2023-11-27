
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CocktailRandomPage from './pages/CocktailRandomPage';
import CategoriesPage from './pages/CategoriesPage';

import CocktailDetailPage from './pages/CocktailDetailPage';
import IngredientsPage from './pages/IngredientsPage';
import CocktailsPage from './pages/CocktailsPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path="/cocktail" element= {<CocktailsPage/>} />
        <Route path="/coctailRandom" element= {<CocktailRandomPage/>} />
        <Route path="/categories" element= {<CategoriesPage/>} />
        <Route path="/ingredients" element= {<IngredientsPage/>} />
        <Route path="/cocktail/detail/:id" element= {<CocktailDetailPage/>} />

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
