import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Drivers from './views/Drivers';
import {React} from "react";
import Rides from './views/Rides';
const App = () =>  {
 
    return (
     
      <HashRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="drivers/" element={<Drivers />} />
        <Route exact path="rides/" element={<Rides />} />
  
      </Routes>
    </HashRouter>
         

      
    )

   
}

export default App;
