import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
/*import About from './Components/About.js';*/
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert.js';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "warning");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  const toggleSwitch1 = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'green';
      document.title = 'TextUtils - Green Mode';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
     { /*<Router>*/}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleSwitch={toggleSwitch}
          theme={theme}
          toggleSwitch1={toggleSwitch1}
          about="About TextUtils"
        />
        <Alert alert={alert} />
        <div className='container my-3'>
         { /*<Routes>
            <Route path="/About" element={<About />} />
            <Route path="/TextForm" element={*/}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
              />
           </div> 
          {/*</Routes>
        cd
      </Router>*/}
    </>
  );
}

export default App;
