import { useState } from 'react'
import DocumentationPage from "./components/DocumentationPage";
import { Routes, Route, Navigate, useLocation } from "react-router";
import ContestPage from './components/ContestPage';
import Test from './components/test'
import NeermanDocumentation from './components/neerman';

function App() {


  return (
    <Routes>
      <Route path='/' element={<NeermanDocumentation />} />
      <Route path="/main" element={<DocumentationPage />} />
      <Route path="/1" element={<ContestPage />} />
      <Route path='/2' element={<Test />} />
    </Routes>
  )
}

export default App
