
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import MenuBar from './components/MenuBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      
      <Container>
        
        <MenuBar/>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
            </Routes>
          </div>
      </Container>
      
    </Router>
    
  );
}

export default App;
