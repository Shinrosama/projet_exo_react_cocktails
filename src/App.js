import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CocktailPage from './pages/CocktailPage';
import HomePage from './pages/HomePage';
import CocktailRandomPage from './pages/CocktailRandomPage';
import CategoriesPage from './pages/CategoriesPage';
import IngredientPage from './pages/IngredientPage';
import CocktailDetailPage from './pages/CocktailDetailPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path="/cocktail" element= {<CocktailPage/>} />
        <Route path="/coctailRandom" element= {<CocktailRandomPage/>} />
        <Route path="/categories" element= {<CategoriesPage/>} />
        <Route path="/ingredients" element= {<IngredientPage/>} />
        <Route path="/cocktail/detail/:id" element= {<CocktailDetailPage/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
