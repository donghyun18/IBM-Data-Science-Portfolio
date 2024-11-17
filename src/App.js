import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Adopt from './components/Adopt';
import Donation from './components/Donation';
import Volunteer from './components/Volunteer';
import Release from './components/Release';
import Login from './components/Login';
import Signup from './components/Signup';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import AdoptionForm from './components/AdoptionForm';
import Feedback from './components/Feedback';
import { Profile } from './components/Profile';
import { useState } from 'react';


function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  return (
      <Router>
       <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/adopt' element={<Adopt/>}/>
        <Route path='/donation' element={<Donation/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
        <Route path='/release' element={<Release/>}/>
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/volunteerform" element={<VolunteerForm />} />
        <Route path="/adoptionform" element={<AdoptionForm />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path='/profile' element={<Profile setIsLogin={setIsLogin} />} />

        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
