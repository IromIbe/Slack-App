import React from "react";
import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <>
          <Routes>
            {/* <Route path='/about'>
              <About />
            </Route>
            <Route path='/users'>
              <Users />
            </Route> */}
            <Route path='/' exact element={<Header />}>
              {/* <h1>This is the HomePage</h1> */}
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
