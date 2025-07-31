import { useState } from 'react'
import DocumentationPage from "./components/DocumentationPage";
import { Routes, Route, Navigate, useLocation } from "react-router";
import ContestPage from './components/ContestPage';


function App() {


  return (
    <Routes>
      <Route path="/" element={<DocumentationPage />} />
      <Route path="/1" element={<ContestPage />} />

    </Routes>
  )
}

export default App
