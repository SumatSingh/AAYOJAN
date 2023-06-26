// import { render } from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Price from './components/Price';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggler from './components/ThemeToggler';

import SignIn from './components/BookNow/SignIn';
import SignUp from './components/BookNow/SignUp';
import SubmitOtp from "./components/BookNow/SubmitOtp";
import Forgot from "./components/BookNow/Forgot";
// import Login from "./components/Login";

import VenueCard from "./components/ServicesF/VenueCard";
import Invitation from "./components/ServicesF/Invitation";
import EnterTainment from "./components/ServicesF/EnterTainment";
import PhoVid from "./components/ServicesF/PhoVid";
import CustomFood from "./components/ServicesF/CustomFood";
import FoodDrinks from "./components/ServicesF/FoodDrinks";

// InnerSevices Folder
import PhoVidForm from "./components/ServicesF/InnerServices/PhoVidForm";
import FdrinksForm from "./components/ServicesF/InnerServices/FdrinksForm";
import CfoodForm from "./components/ServicesF/InnerServices/CfoodForm"
import EtainmentForm from "./components/ServicesF/InnerServices/EtainmentForm";
import InviteForm from "./components/ServicesF/InnerServices/InviteForm";
import VcardForm from "./components/ServicesF/InnerServices/VcardForm";



import AdminDash from "./components/BackEnd/AdminDash";


import Update from "./components/BackEnd/Update";
import Dashboard from "./components/BackEnd/Dashboard";
import PieChart from "./components/BackEnd/PieChart";
import UserInterface from "./components/BookNow/UserInterface";
import DashHeader from "./components/BackEnd/DashHeader";
import AfterSignin from "./components/BookNow/AfterSignin";





function App() {
    
    if (window.localStorage.getItem('isAdmin') === "true" && window.location.href !== 'http://localhost:3000/admindash'){
      window.location.replace('http://localhost:3000/admindash');
    }else if (window.localStorage.getItem('email') && window.localStorage.getItem('isAdmin') === "false" && window.location.href !== 'http://localhost:3000/'){
      window.location.replace('http://localhost:3000/');
    }
    return (
    <>
      <BrowserRouter>
      <Header />
      <ThemeToggler />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/price' element={<Price/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/review' element={<Review/>} />
        
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/forgot' element={<Forgot/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route path='/forgot/submitotp' element={<SubmitOtp/>} />
        <Route path='/userinterface' element={<UserInterface/>} />


        <Route path='/venuecard' element={<VenueCard/>} />
        <Route path='/invitation' element={<Invitation/>} />
        <Route path='/fooddrinks' element={<FoodDrinks/>} />
        <Route path='/customfood' element={<CustomFood/>} />
        <Route path='/phovid' element={<PhoVid/>} />
        <Route path='/entertainment' element={<EnterTainment/>} />

        {/* InnerSevices Folder */}
        <Route path='/phovidform' element={<PhoVidForm/>} />
        <Route path='/fdrinksform' element={<FdrinksForm/>} />
        <Route path='/cfoodform' element={<CfoodForm/>} />
        <Route path='/etainmentform' element={<EtainmentForm/>} />
        <Route path='/inviteform' element={<InviteForm/>} />
        <Route path='/vcardform' element={<VcardForm/>} />

        {/* backend */}
        <Route path='/admindash' element={<AdminDash/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/piechart' element={<PieChart/>} />
        <Route path='/dashheader' element={<DashHeader/>} />

         <Route path='/aftersignin' element={<AfterSignin/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
 </>
  );
}

export default App;


    //  <Header/>
    //  <Home/> 
    //  <Services/>
    //  <About/>
    //  <Gallery/>
    //  <Price/>
    //  <Review/>
    //  <Contact/>
    //  <Footer/>
    //  <ThemeToggler/>
    //  <SignIn/>
    //  <SignUp/>

// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Services from './components/Services';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import Price from './components/Price';
// import Review from './components/Review';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ThemeToggler from './components/ThemeToggler';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';


// <BrowserRouter>
// <Routes>
 
//     <Route path="/" element={<App />}>
//     <Route index element={<Header />}/>
//     <Route path="./components/Services.js" element={<Services />}>
//     <Route path="About" element={<About />}/>
//     <Route path="Gallery" element={<Gallery />}/>
//     </Route>
//     </Route>
// </Routes>
// </BrowserRouter>