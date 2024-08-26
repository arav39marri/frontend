import React from "react";
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import DisplayHome from "./Components/DisplayHome";
import Display from "./Components/Display";
import { Route, Routes } from "react-router-dom";
import Displayalbum from './Components/Displayalbum'
const App = () => {
  

  return (                                                  
    <div className="h-screen bg-black">
      <div className="h-[90%] flex ">
        <Sidebar/>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<Displayalbum/>} />
            
        </Routes>
      </div>
        
       <Player/>
    </div>
  );
};

export default App;
