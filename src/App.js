// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navb from './Nav/Navb';
import About from './Pages/About/About';
import ContactForm from './Pages/Form/ContactForm';
import Header from './Pages/Header/Header';
import Projects from './Pages/Projects/Projects';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navb></Navb>
      <Routes>
        <Route path='/' element={<Header/> } />
        {/* <Route path='/projects' element={<Projects/>} /> */}
        {/* <Route path='/' element={<Header/>}>
        <Route path='/' element={<Header/>}> */}
      </Routes>
    </div>
  );
}

export default App;
