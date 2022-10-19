import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LockScreen from './pages/LockScreen'
import SplashScreen from './pages/SplashScreen'

import SoftKeyboard from './components/SoftKeyboard'
import { listen } from '@tauri-apps/api/event'

function App() {
  const [showKeyboard, setShowKeyboard] = useState(false)

  useEffect(() => {
    const unlisten = listen('toggle_software_keyboard', (event) => {
      setShowKeyboard(!showKeyboard)
    })

    return () => {
      unlisten.then((r) => r())
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
      <SoftKeyboard show={showKeyboard} />
    </BrowserRouter>
  )
}

export default App
