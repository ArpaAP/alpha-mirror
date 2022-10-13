import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LockScreen from './pages/LockScreen'
import SplashScreen from './pages/SplashScreen'

import { appWindow } from '@tauri-apps/api/window'

function App() {
  useEffect(() => {
    const handleKeydown = async (event: KeyboardEvent) => {
      if (event.key === 'f') {
        const isFullscreen = await appWindow.isFullscreen()
        await appWindow.setFullscreen(!isFullscreen)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
