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
import Articles from "./pages/Articles";
import Editors from "./pages/Editors";
import LogRocket from "logrocket";
import Footer from "./components/Footer";

function App() {
    const [logged, setLogged]= useState<boolean>(false);
    const navigate = useNavigate()

    useEffect(() =>{
        LogRocket.init('kurier-sobieskiego/kurier');
        const auth = cookies.get('auth');
        if(auth)
            setLogged(true);
    },[])
  return (
      <div className={'bg-neutral-900 text-white'}>
          <div className={'min-h-[100vh]'}>
              <NavBar logged={logged} logout={()=>{
                  cookies.remove('auth');
                  setLogged(false);
                  navigate('/');
              }} />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/article/:articleId" element={<Article />} />
                  <Route path="/archiwum" element={<Archive />} />
                  <Route path="/teksty/:type" element={<Articles />} />
                  <Route path="/redakcja" element={<Editors />} />
                  {
                      !logged && <Route path="/login" element={<Login login={()=>setLogged(true)}/>} />
                  }

                  {
                      logged && <Route path="/adminPanel/*" element={<AdminPanel />} />
                  }
              </Routes>
          </div>
          <Footer />
      </div>
  );
}

export default App;
