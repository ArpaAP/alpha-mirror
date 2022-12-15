import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LockScreen from './pages/LockScreen'
import SplashScreen from './pages/SplashScreen'

import SoftKeyboard from './components/SoftKeyboard'
import { listen } from '@tauri-apps/api/event'
import Controlbar from './components/Controlbar'
import BottomMenu from './components/BottomMenu'
import { useAtom } from 'jotai'
import {
  buttonClickedAtom,
  joystickDirectionAtom,
  showBottomMenuAtom,
  showControlbarAtom,
  showSoftKeyboardAtom,
} from './atoms'
import sidecarChild from './modules/SidecarChild'
import WeatherScreen from './pages/WeatherScreen'
import NewsScreen from './pages/NewsScreen'
import CalendarScreen from './pages/CalendarScreen'
import CovidScreen from './pages/CovidScreen'
import MealScreen from './pages/MealScreen'

function App() {
  const [showKeyboard, setShowKeyboard] = useAtom(showSoftKeyboardAtom)
  const [showControlbar, setShowControlbar] = useAtom(showControlbarAtom)
  const [showBottomMenu, setShowBottomMenu] = useAtom(showBottomMenuAtom)

  const [direction, setDirection] = useAtom(joystickDirectionAtom)
  const [buttonClicked, setButtonClicked] = useAtom(buttonClickedAtom)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(sidecarChild.data.direction)
      setButtonClicked(sidecarChild.data.joystick!.isSwitchPressed)
    }, 100)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    const unlistens = [
      listen('toggle_software_keyboard', () => {
        setShowKeyboard(!showKeyboard)
      }),
      listen('toggle_controlbar', () => {
        setShowControlbar(!showControlbar)
      }),
      listen('toggle_bottom_menu', () => {
        setShowBottomMenu(!showBottomMenu)
      }),
    ]

    return () => {
      unlistens.map((unlisten) => unlisten.then((r) => r()))
    }
  })

  return (
    <BrowserRouter>
      <Controlbar show={showControlbar} />
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path="/covid" element={<CovidScreen />} />
        <Route path="/meal" element={<MealScreen />} />
      </Routes>
      <SoftKeyboard show={showKeyboard} />
      <BottomMenu show={showBottomMenu} />
    </BrowserRouter>
  )
}

export default App
