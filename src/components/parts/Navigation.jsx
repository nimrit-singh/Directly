import React from "react";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
// const navigate=useNavigate();  
const navigateRegister = () => {
    // 👇️ Navigate to /contacts
    redirect('../pages/Register/Register');
  };

  const navigateHome = () => {
    // 👇️ Navigate to /
redirect('/');
  };
  export {
    navigateRegister,
    navigateHome
  };