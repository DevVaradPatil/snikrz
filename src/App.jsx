import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Shop from './components/Shop.jsx'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import { AuthProvider } from './AuthContext';
import { ShoeProvider } from './ShoeContext';
import ScrollToTop from './components/ScrollToTop';
import Shoe from './components/Shoe';
import Favourite from './components/Favourite';
import Cart from './components/Cart';


function App() {

  return (

    <Router>
      <ScrollToTop/>
      <AuthProvider>
        <ShoeProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/shoe/:id' element={<Shoe/>}/>
        <Route path='/favourites' element={<Favourite />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer/>
      </ShoeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
