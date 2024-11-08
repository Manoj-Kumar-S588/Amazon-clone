import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';
const stripePromise = loadStripe(
  'pk_test_51KFx4sLpJzYnNWI5rYVkEM8afjfAhwnFmDDuMTsgSWN39yr0XnSgRklePqygAYKZaZHqMHGNNW5WwUmuYbDuyK1Q00Ef9zKWxY'
);

function App() {
  const [{ basket}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Payment"
            element={<Elements stripe={stripePromise}>{<Payment />}</Elements>}
          />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
