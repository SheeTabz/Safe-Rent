import './App.css';
import NavBar from './components/NavBar';
import PagesTemplate from './components/PagesTemplate';
import CarsPage from './pages/CarsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';

function App() {
  return (
    <div className="App">
  <NavBar/>
  {/* <LandingPage/> */}
  <LogInPage/>
{/* <CarsPage/> */}
    </div>
  );
}

export default App;
