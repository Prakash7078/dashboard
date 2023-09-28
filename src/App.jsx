import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Buyers from './pages/Buyers'
import Sellers from './pages/Sellers'
import Storages from './pages/Storages'
import WoolCategories from './pages/WoolCategories'
import WoolContent from './pages/WoolContent'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/buyers' element={<Buyers/>}/>
      <Route path='/sellers' element={<Sellers/>}/>
      <Route path='/storages' element={<Storages/>}/>
      <Route path='/categories' element={<WoolCategories/>}/>
      <Route path='/content' element={<WoolContent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
