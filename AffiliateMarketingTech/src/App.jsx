import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import SignUp from './pages/SignUp';
import BugForm from './pages/Bug';

export default function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Sign-up" element={<SignUp />} />
            {/* <Route path="Bug-report" element={<BugForm />} /> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)

