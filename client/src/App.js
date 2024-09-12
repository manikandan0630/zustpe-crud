import {BrowserRouter,Routes,Route} from "react-router-dom"

import React from 'react'

import Create from "./components/create.jsx"
import Update from "./components/update.jsx"
import Home from "./components/home.jsx"

const App = () => {
  return (
    <div>
      <BrowserRouter >
            <Routes >
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/update/:id" element={<Update />}></Route>
         
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App