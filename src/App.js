
import { createContext, useState } from "react";
import {firebaseConfig} from "./firebase.config.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar/Navbar/Navbar.js';
import './Components/Style/Global_Row.css';
import Home from './Page/Home.js';
import Login from './Page/Login.js';
import Dashboard from './Page/Dashboard.js';
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll.js";
import SingleFeature from "./Components/Tab/All_Feature/SingleFeature.js";
import UserOverview from "./Components/Dashboard/User/UserOverview.js";
import AllFeatureOverview from "./Components/Dashboard/All-feature-Request/AllFeatureOverview.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";
export const userContext = createContext();

function App() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const [user, setUser] = useState({});
    const contextData = { user, setUser}
  return (
    <userContext.Provider value={contextData}>
      <Router>
        <SmoothScroll/>
        <Navbar/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/single/feature/:id" component={SingleFeature} />
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/AllFeatureRequest">
              <AllFeatureOverview/>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/user">
              <UserOverview/>
            </PrivateRoute>

          </Switch>
        </Router>
    </userContext.Provider>
  );
}

export default App;
