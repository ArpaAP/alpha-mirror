import dayjs from 'dayjs'
import { ReactNode, useEffect, useState } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="px-5 py-3 h-screen animate-fade-in flex flex-col">
      <div className="w-full flex items-center gap-4 mb-5">
        <div className="flex gap-2 items-center">
          <div className="text-2xl font-bold">{time.format('hh:mm')}</div>
          <div className="">{time.format('A')}</div>
        </div>
        <div className="ml-auto text-md">
          {time.format('MM월 DD일')} ({['일', '월', '화', '수', '목', '금', '토'][time.day()]})
        </div>
      </div>

      {children}
    </div>
  )
}
