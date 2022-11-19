import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/dashboard'
import Youtube from './components/layouts/Youtube';
import Insert from './page/Insert'
import Edit from './page/Edit'
import View from './page/View'
import Content from './components/layouts/Content'
import './page/Card.css'
import Contracts from './page/Contracts';

import { Modal,show,Button} from 'react-bootstrap';
function App() {

  const {user} = useContext(UserContext); 
 
  
  return (
    <div className="container">
        <BrowserRouter>
          <Routes>
            { user && user.user_role==0 && <Route path="/" element={<Home/>} /> }
            { user && user.user_role==1 && <Route path="/" element={<Dashboard/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              
              </>
            )}
            <Route path="/insert" element={<Insert />} />
            <Route path="/contracts" element={<Contracts />} />

        <Route path="/edit/:ids" element={<Edit />} />
        <Route path="/view/:ids" element={<View />} />
        <Route path="/home" element={<Content> <Youtube/> </Content> } />
              
          
            <Route path="*" element={<Navigate to={user ? '/':'/home'} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;