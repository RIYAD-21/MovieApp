import HomePage from './pages/HomePage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails.tsx'
import Favorites from './pages/favorites.tsx';
import { MovieProvider } from './movieContext.tsx';


function App() {

  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/movie/:id' element={<MovieDetails/>}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </Router>
    </MovieProvider>
  )
}

export default App
