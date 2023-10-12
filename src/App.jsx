import { useState } from 'react'
import Navbar from './Component/Navbar'
//import About from './Component/About'
import TextForm from './Component/TextForm'
import Alert from './Component/Alert';
import About from './Component/About';
import { Routes,Route } from "react-router-dom";


//import './App.css'



function App() {
  
  const[mode,setMode]=useState("light");

  const[alert,Setalert]=useState(null)

  const Showalert=(message,type)=>{
      Setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        Setalert(null)
      },1500)
  }

  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      Showalert("Dark mode is enabled","success")
      document.title="textutals-Darkmode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      Showalert("Light mode is enabled","success")
      document.title="Textutals-Lightmode"

    }
  }

  return (
    <>
   
  
  
  
    <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    
  

    <div className="container my-3">
    <Routes>
       <Route path='/about' element={<About/>} />
        <Route path='/' element={<TextForm Showalert={Showalert} heading="Enter the text to Analyze Bellow"  mode={mode}/>}/>
        </Routes>
        
          </div>
          
          
          
         </> 
          
   
    
          
  )
}

export default App
