import React from 'react';
import HelloWorld from "./components/HelloWorld"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import "./app.css"

function Website() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HelloWorld />
    </div>
    );
}

export default Website;
