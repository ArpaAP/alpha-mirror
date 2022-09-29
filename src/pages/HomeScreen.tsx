import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function HomeScreen() {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    return () => clearInterval(interval)
  })

  return (
    <div className="px-6 py-5 h-screen animate-fade-in">
      <div className="w-full flex gap-4">
        <div className="text-3xl font-bold">{time.format('HH:mm')}</div>
        <div className="ml-auto text-md">
          {time.format('MM월 DD일')} ({['월', '화', '수', '목', '금', '토', '일'][time.day()]})
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
