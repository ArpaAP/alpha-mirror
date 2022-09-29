import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

function LockScreen() {
  const [time, setTime] = useState(dayjs())
  const navigate = useNavigate()

  const [isFadeout, setIsFadeout] = useState(false)

  useEffect(() => {
    const handleClick = () => {
      setIsFadeout(true)

      setTimeout(() => navigate('/home'), 1000)
    }

    window.addEventListener('click', handleClick)

    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    return () => {
      window.removeEventListener('click', handleClick)
      clearInterval(interval)
    }
  })

  return (
    <div
      className={classNames(
        'p-10 flex flex-col justify-center items-center h-screen transition-all duration-1000 animate-fade-in',
        isFadeout ? 'opacity-0' : 'opacity-1',
      )}
    >
      <div className="text-8xl font-light mb-2">{time.format('HH:mm')}</div>
      <div>
        {time.format('YYYY년 MM월 DD일')} {['월', '화', '수', '목', '금', '토', '일'][time.day()]}
        요일
      </div>
      <div className="mt-20 animate-pulse text-sm font-light">아무 버튼이나 클릭하십시오</div>
    </div>
  )
}

export default LockScreen
