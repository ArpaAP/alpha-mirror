import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import {
  TbArrowsMaximize,
  TbCalendar,
  TbCircleDot,
  TbHome,
  TbNews,
  TbSun,
  TbToolsKitchen2,
  TbVirus,
} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { showBottomMenuAtom } from '../atoms'
import sidecarChild from '../modules/SidecarChild'

interface BottomMenuProps {
  show?: boolean
}

export default function BottomMenu({ show }: BottomMenuProps) {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<string | null>(null)

  const [showBottomMenu, setShowBottomMenu] = useAtom(showBottomMenuAtom)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDirection = sidecarChild.data.direction

      if (direction !== newDirection) {
        if (direction?.includes('r')) {
          setCurrent(Math.min(4, current + 1))
        }
        if (direction?.includes('l')) {
          setCurrent(Math.max(0, current - 1))
        }
      }

      setDirection(newDirection)
    })

    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (!showBottomMenu) return

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === ',') {
        setCurrent(current - 1)
      } else if (event.key === '.') {
        setCurrent(current + 1)
      }
    }

    window.addEventListener('keydown', keyHandler)

    return () => window.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="fixed inset-x-0 w-screen h-40 bottom-0 z-[9999]">
      <Transition
        className="h-full"
        show={show}
        enter="transition-all duration-500 ease-out"
        enterFrom="opacity-0 translate-y-48"
        enterTo="opacity-100 translate-y-0 bg-black/50 backdrop-blur-sm"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="opacity-100 translate-y-0 bg-black/50 backdrop-blur-sm"
        leaveTo="opacity-0 translate-y-48"
      >
        <div className="text-lg flex justify-between mb-2 px-3">
          <div className="text-xl font-semibold">앱스</div>
          <div className="flex text-sm items-center gap-2">
            <span className="flex gap-2 items-center">
              <TbArrowsMaximize className="rotate-45" /> 커서 이동
            </span>
            <span>|</span>
            <span className="flex gap-2 items-center">
              <TbCircleDot size={18} /> 선택
            </span>
          </div>
        </div>
        <div className="h-full grid grid-cols-6 text-2xl font-semibold">
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 0 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/home')
              setShowBottomMenu(false)
              setCurrent(0)
            }}
          >
            <TbHome /> 홈
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 1 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/weather')
              setShowBottomMenu(false)
              setCurrent(1)
            }}
          >
            <TbSun /> 날씨
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 2 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/news')
              setShowBottomMenu(false)
              setCurrent(2)
            }}
          >
            <TbNews /> 뉴스
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 3 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/calendar')
              setShowBottomMenu(false)
              setCurrent(3)
            }}
          >
            <TbCalendar /> 캘린더
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 4 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/covid')
              setShowBottomMenu(false)
              setCurrent(4)
            }}
          >
            <TbVirus /> 코로나19
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 5 && 'bg-white text-black',
            )}
            onClick={() => {
              navigate('/meal')
              setShowBottomMenu(false)
              setCurrent(5)
            }}
          >
            <TbToolsKitchen2 /> 급식
          </div>
        </div>
      </Transition>
    </div>
  )
}
