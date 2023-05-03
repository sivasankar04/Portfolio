import './App.scss';
import { Routes, Route } from "react-router-dom";

import TopBar from './Components/Topbar';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { NopageFound } from './Components/NoPageFound';
import { About } from './Components/About';
import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  return (
    <div className="my-portfolio">
      {loading ? <div className='loader'><ScaleLoader color="orange"/></div> : <div>

        <TopBar />
        <div className='childComponents'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NopageFound />} />
          </Routes>
        </div>
      </div>}
    </div>
  );
}
export default App;
