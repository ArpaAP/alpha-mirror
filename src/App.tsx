import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LockScreen from './pages/LockScreen'
import SplashScreen from './pages/SplashScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
