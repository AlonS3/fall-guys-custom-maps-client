import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
 
// import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from './pages/Home/HomePage'
import User from "./pages/UserDetail/UserPage";
import Users from "./pages/UserList/UsersPage";
import NewMap from "./pages/NewMap/NewMapPage";
import Map from "./pages/MapDetail/MapPage";
import About from "./shared/pages/AboutPage";
import Login from "./shared/pages/LoginPage";
import Profile from "./pages/Profile/Profile";
import  { AuthContext } from './shared/context/authContext'
import AxiosNavigation from "./shared/hooks/AxiosNavigation";

import ScrollToTop from "./shared/components/ScrollToTop";
import Navbar from "./shared/components/navigation/Navbar";

import {
  Box,
} from '@chakra-ui/react'
import ResolveSearchParams from "./shared/components/ResolveSearchParams";
import useAuthReactQuery from "./shared/hooks/useAuthReactQuery";
import ServerNetworkAlert from "./shared/components/ServerNetworkAlert";
 
const App = () => {
  const { isLoggedIn, login, logout, useLogout, userData, isLoading } = useAuthReactQuery();
  
  
  
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout, useLogout: useLogout, userData: userData}}>
      <Router>
        <AxiosNavigation useLogout={useLogout}/>
        <ScrollToTop/>
        <Navbar isLoading={isLoading}/>
        <ServerNetworkAlert/>
        <Box as="main" pt={14} minH={"calc(100vh - 3.5rem)"} overflowX={"clip"}>
          {!isLoading && 
            <Routes>
              <Route path="/" element={<ResolveSearchParams><HomePage /></ResolveSearchParams>} />
              <Route path="/map/new" element={isLoggedIn ? <NewMap /> : <Navigate to="/login" replace={true}/>} />
              <Route path="/map/:mapId" element={<Map />} />
              <Route path="/user/:userId/maps" element={<User />} />
              {/* <Route path="/users" element={<Users />} /> */}
              <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" replace={true}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" replace={true}/>} />
              <Route path="/*" element={<Navigate to="/" replace={true}/>} />
            </Routes>
          }
          
        </Box>
      </Router>
    </AuthContext.Provider>
  );
};
 
export default App;