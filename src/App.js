import './App.css';
import Navbar from './Navbar';
import Form1 from './Form1.js';
import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been enabled!", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'darkBlue';
      showAlert("Dark mode Has been enabled!", "success");
    }

  }

  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-2" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <h3 className="my-3">Enter Your Text Here...</h3>
        <Form1 mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;