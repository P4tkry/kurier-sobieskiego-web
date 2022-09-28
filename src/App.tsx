import React, {useEffect, useState} from 'react';
import './index.scss';
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import NavBar from "./components/NavBar";
import Article from "./pages/Article";
import Login from "./pages/Login";
import cookies from "./utils/cookies";
import AdminPanel from "./pages/AdminPanel";
import Archive from "./pages/Archive";

function App() {
    const [logged, setLogged]= useState<boolean>(false);
    const navigate = useNavigate()

    useEffect(() =>{
        const auth = cookies.get('auth');
        if(auth)
            setLogged(true);
    },[])
  return (
      <div className={'bg-neutral-900 text-white'}>
          <NavBar logged={logged} logout={()=>{
              cookies.remove('auth');
              setLogged(false);
              navigate('/');
          }} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:articleId" element={<Article />} />
              <Route path="/archiwum" element={<Archive />} />
              {
                  !logged && <Route path="/login" element={<Login login={()=>setLogged(true)}/>} />
              }

              {
                  logged && <Route path="/adminPanel/*" element={<AdminPanel />} />
              }
          </Routes>
      </div>
  );
}

export default App;
