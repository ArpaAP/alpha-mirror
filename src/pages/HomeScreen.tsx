import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

function HomeScreen() {
  const [time, setTime] = useState(dayjs())
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    const sleepInterval = setInterval(() => {
      navigate('/')
    }, 50000)

    return () => {
      clearInterval(interval)
      clearInterval(sleepInterval)
    }
  }, [])

  return (
    <div className="px-5 py-3 h-screen animate-fade-in">
      <div className="w-full flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <div className="text-3xl font-bold">{time.format('hh:mm')}</div>
          <div className="">{time.format('A')}</div>
        </div>
        <div className="ml-auto text-md">
          {time.format('MM월 DD일')} ({['월', '화', '수', '목', '금', '토', '일'][time.day()]})
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
