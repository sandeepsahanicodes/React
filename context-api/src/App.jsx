import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvide";

function App() {
 
  return (
    <UserContextProvider>
      <h1>Learning React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
