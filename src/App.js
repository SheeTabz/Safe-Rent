import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import CarsPage from './pages/CarsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import SingleCarPage from './pages/SingleCarPage';
import ServicePage from './pages/ServicePage';

function App() {
  const [user, setUser] = useState();
  const [singleData, setData] = useState({})
  const [ errors, setErrors] = useState()
const [logInPath, setLogInPath] = useState('/login')


useEffect(()=> {
  fetch("/me")
  .then(res => {
    if(res.ok && Object.keys(user).length > 0){
      res.json().then(user => setUser(user))
    }
    else{
      res.json().then(err => console.log(err.errors))
    }
  })
},[])

function handleOneCar(id){
  fetch(`/cars/${id}`)
  .then(res => {
    if(res.ok){
      res.json().then(data => setData(data))
    }
    else {
      res.json().then(data => setErrors(data.errors))
    }
  })
}

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
  <Route path='/cars' element={<CarsPage handleOneCar={handleOneCar}/>} />
  <Route path='/cars/:id' element={<SingleCarPage data={singleData} user={user}  errors={errors}/>} />
  <Route path='/about' element={<AboutPage/>} />
  <Route path='/services' element={<ServicePage/>} />
</Routes>
    </div>
  );
}

export default App;
