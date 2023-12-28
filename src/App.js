import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import SignUp from "./components/Sign-up/SignUp";
import Login from "./components/Login/Login";
import InstaPage from "./components/InstaPage/InstaPage";
import InstaPofile from "./components/InstaProfile/InstaProfile";
import InstaChats from "./components/InstaChats/InstaChats";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/InstaPage" element={<InstaPage />} />
        <Route exact path="/InstaProfile" element={<InstaPofile />} />
        <Route exact path="/InstaChats" element={<InstaChats />} />
        <Route exact path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
