import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CarsPage from './pages/CarsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';

function App() {
  const [user, setUser] = useState(null);
const [logInPath, setLogInPath] = useState('/login')


useEffect(()=> {
  fetch("/me")
  .then(res => {
    if(res.ok){
      res.json().then(user => setUser(user))
    }
    else{
      res.json().then(user => console.log(user.errors))
    }
  })
},[])

function handleUser(user) {
  setUser(user);
}
// if(!user) return <LogInPage handleLogin={setUser} />;
console.log(user)
  return (
    <div className="App">
  <NavBar user={user} setUser={setUser}/>
  <Routes>
    <Route exact path='/' element={<LandingPage/>}/>
  <Route path='/login' element={<LogInPage handleUser={handleUser}/>} />
  <Route path='/cars' element={<CarsPage/>} />
</Routes>
    </div>
  );
}

export default App;
