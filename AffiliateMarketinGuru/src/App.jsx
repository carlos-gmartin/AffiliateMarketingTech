import './index.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App
