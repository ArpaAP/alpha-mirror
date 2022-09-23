import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

function LockScreen() {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs())
    }, 500)
  })

  return (
    <div className="p-10 flex flex-col justify-center items-center h-screen animate-fade-in">
      <div className="text-8xl font-light mb-2">{time.format('HH:mm')}</div>
      <div>{time.format('YYYY년 MM월 DD일')}</div>
      <div className="mt-20 animate-pulse text-sm font-light">아무 곳이나 클릭하십시오</div>
    </div>
  )
}

export default LockScreen
