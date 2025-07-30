import { useState } from 'react'
import DocumentationPage from "./components/DocumentationPage";
import { Routes, Route, Navigate, useLocation } from "react-router";


function App() {


  return (
    <Routes>
      <Route path="/" element={<DocumentationPage />} />
    </Routes>
  )
}

export default App
