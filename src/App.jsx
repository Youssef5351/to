
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Desc from "./Components/Desc/Desc";
import CrispChat from "./Components/Ui/CrispChat";
import CrispProvider from "./Components/Ui/CrispProvider";
import ScrollSection from "./Components/Scroll/ParallaxSection";
import Master from "./Components/Master/Master";
import Infinite from "./Components/Infinite/Infinite";
import SignUp from "./Components/SignUp/SignUp";
import Location from "./Components/Location/Locaction";

const App = () => {
  return (
    <div>
      <Navbar />
      <Desc />
      <Infinite />
      <Location />
      <SignUp />
      <LandingPage />
  </div>    
  )
}
export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import Desc from "./Components/Desc/Desc";
// import CrispChat from "./Components/Ui/CrispChat";
// import CrispProvider from "./Components/Ui/CrispProvider";
// import ScrollSection from "./Components/Scroll/ParallaxSection";
// import Master from "./Components/Master/Master";
// import Infinite from "./Components/Infinite/Infinite";
// import SignUp from "./Components/SignUp/SignUp";
// import Location from "./Components/Location/Locaction";


// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <CrispChat />
//                 <CrispProvider />
//                 <LandingPage />
//                 <Master />
//                 <Infinite />
//                 {/* <ScrollSection /> */}
//                 <Desc />
//                 <Location />
//               </div>
//             }
//           />
//           <Route path="/sign-up" element={<SignUp />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
