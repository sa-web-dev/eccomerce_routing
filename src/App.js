import './App.css';
import { Route,Routes } from 'react-router-dom';
import DigiNav from './components/DigNav';
import DigiFooter from './components/DigFooter';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import PageNotFound from './components/PageNotFound';




function App() {
  return (
    
      <div>
  
  
        <DigiNav/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contactus/" element={<ContactUs/>}/>
            <Route path="*" element={<PageNotFound/>}/>




        </Routes>
  
  
        <DigiFooter/>

      </div>
    );
  }
  

export default App;
