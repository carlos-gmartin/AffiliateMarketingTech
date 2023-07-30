import './App.css';
import './index.css';
import Sidenav from './components/Sidenav';
import Main from './components/Main';


function App() {
  return (
    <div className='w-full h-full'>
      <Sidenav/>
        <Main/>
    </div>
  );
}

export default App
