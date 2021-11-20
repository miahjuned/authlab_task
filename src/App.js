
import { createContext, useState } from "react";
// import {firebaseConfig} from "./firebase.config";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar/Navbar/Navbar.js';
import BottomBar from './Components/Navbar/BottomBar/BottomBar.js';
import './Components/Style/Global_Row.css';
import Home from './Page/Home.js';
export const userContext = createContext();

function App() {
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const [user, setUser] = useState({});
    const contextData = { user, setUser}
  return (
    <userContext.Provider value={contextData}>
      <Router>
        {/* <SmoothScroll></SmoothScroll> */}
        
        <Navbar/>
        <BottomBar/>

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>


            {/* <Footer/> */}
        </Router>
    </userContext.Provider>
  );
}

export default App;
