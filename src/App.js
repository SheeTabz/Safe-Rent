import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CarsPage from './pages/CarsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';

function App() {
  return (
    <div className="App">
  <NavBar/>
  <Routes>
    <Route exact path='/' element={<LandingPage/>}/>
  <Route path='/login' element={<LogInPage/>} />
  <Route path='/cars' element={<CarsPage/>} />
</Routes>
    </div>
  );
}

export default App;
