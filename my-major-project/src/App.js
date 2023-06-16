import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from "./Components/HomePage/Navbar"

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
