import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, darkMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      darkMode('dark');
      document.body.style.backgroundColor = ' #031637';
      showAlert("Dark mode has been enabled", "success");

    }
    else {
      darkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextCheck" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container m-3"> 
      <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>  
      <About />   
      </div>
    </>
  );
}

export default App;
