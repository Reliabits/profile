import './home.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Home from './components/Home';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='container-fluid custom-overflow'>
    <Home />
    </div>
    </>
  );
}

export default App;
