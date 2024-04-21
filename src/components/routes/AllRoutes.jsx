// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Signin from '../pages/Signin/Signin';
import Onboarding from '../pages/Onboarding/Onboarding';
import Dashboard from '../pages/Dashboard/Dashboard';
function AllRoutes() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/onboarding" element={<Onboarding/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      {/* Temporary routes for ui making purposes */}
        </Routes>
    </Router>
  );
}

export default AllRoutes;
