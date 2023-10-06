import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import TeachersPage from './pages/TeachersPage/TeachersPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

function App() {


  return (

  
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path='teachers' element={<TeachersPage/>}/>
        <Route path='favorites' element={<FavoritesPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
