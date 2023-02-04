
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Activity from './Activity/Activity';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';





function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/activity" element={<Activity></Activity>}></Route>


      </Routes>




      <Footer></Footer>

    </div>
  );
}

export default App;
