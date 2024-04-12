import { useState } from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import './App.css'
import CharacterGallery from './pages/CharacterGallery'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CreateCharacter from './pages/CreateCharacter'
import EditCharacter from './pages/EditCharacter'
import ReadCharacter from './pages/ReadCharacter'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='character-creation' element={<CreateCharacter/>}/>
        <Route path='character-gallery' element={<CharacterGallery/>}/>
        <Route path='character-details/:id' element={<ReadCharacter/>}/>
        <Route path='character-details/edit-character/:id' element={<EditCharacter/>}/>
        <Route path='*' element={(<h1>no</h1>)}/>
      </Routes>
    </div>
  )
}

export default App;
