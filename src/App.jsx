import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Tvshow from './components/Tvshow/Tvshowes'
import Movies from './components/Movies/Movies'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import People from './components/People/People'
import Networks from './components/Networks/Networks'
import Notfound from './components/Notfound/Notfound'
import Details from './components/Details/Details'
import { Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div >
         <Navbar/>
         
      <div className="container">
           <Routes>
           <Route path="/" element={<Home/>}></Route> 
          <Route path="navbar" element={<Navbar/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="movies" element={<Movies/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="tvshow" element={<Tvshow/>}></Route>
          <Route path="details " element={<Details/>}></Route>
          <Route path="login " element={<Login/>}></Route>
          <Route path="register " element={< Register/>}></Route>
          <Route path="people " element={<People/>}></Route>
          <Route path="networks " element={< Networks/>}></Route>
          <Route path="*" element={< Notfound/>}></Route>
        </Routes>  
      </div>
      
    </div>
    
  );
}

export default App;

