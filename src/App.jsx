import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* Outlet ajuda a fazer a rota da home e newpost */}
        <Outlet />
      </div>
    </div>
  )
}

export default App
