// import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';

import { HomePage } from './components/HomePage/HomePage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SearchDoctor } from './components/SearchDoctor/SearchDoctor';
import { Lab } from './components/Lab'

import { Route, Routes } from 'react-router-dom';
import { Medicines } from './components/Medicines';
import { Acne } from './components/Acne';
import { Body } from './components/Body';

import { ProductsDetails } from "./components/ProductsDetails"
import { Cart } from './components/Cart';
import { Payment } from './components/payment';
import { Ordersuccess } from './components/ordersuccess';
import { Address } from './components/address';
import Auth from './components/componentsCH/Auth/Auth';
import Login from './components/componentsCH/login/login';
import Register from './components/componentsCH/register/register';
import OTP from './components/componentsCH/OTP/otp';






function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/search/doctors" element={<SearchDoctor />} />

        <Route path="/doctors" element={<Lab />} />

        <Route path="/medicines" element={<Medicines />}></Route>

        <Route path="/acne" element={<Acne />}></Route>

        <Route path="/body" element={<Body />}></Route>

        <Route path="/:type/:userid" element={<ProductsDetails />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/ordersuccess" element={<Ordersuccess />}></Route>
        <Route path="/address" element={<Address />}></Route>


        {/* <Route exact path="/Auth"
          element={
            <Login />
          }
        /> */}
        <Route exact path="/Auth" element={<Auth />} />
        <Route exact path="/OTP" element={<OTP />} />

        <Route path="*" element={<div>404 page not found</div>}></Route>





      </Routes>
      <Footer />

    </div>
  );
}

export default App;

