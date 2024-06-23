

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Desc from "./Components/Desc/Desc";
import CrispChat from "./Components/Ui/CrispChat";
import CrispProvider from "./Components/Ui/CrispProvider";
import Master from "./Components/Master/Master";
import Infinite from "./Components/Infinite/Infinite";
import SignUp from "./Components/SignUp/SignUp";
import Location from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";


const App = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
 
 useEffect(() => {
    // Check local storage or cookies for authentication state
   const authState = localStorage.getItem('isAuthenticated');
    if (authState) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <Router>
 <div> 
        <Navbar isAuthenticated={isAuthenticated}/>
<Routes>
        <Route
           path="/"
            element={
              <div>
                <CrispChat />
                <CrispProvider />
                <LandingPage />
                <Master />
                <Infinite />
                {/* <ScrollSection /> */}
                <Desc />
                <Location />
                <Footer/>
</div>
            }
          />
          <Route path="/sign-up" element={<SignUp setIsAuthenticated={setIsAuthenticated}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
