import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import {
  TbArrowsMaximize,
  TbCalendar,
  TbCircleDot,
  TbNews,
  TbSun,
  TbToolsKitchen2,
  TbVirus,
} from 'react-icons/tb'
import sidecarChild from '../modules/SidecarChild'

interface BottomMenuProps {
  show?: boolean
}

export default function BottomMenu({ show }: BottomMenuProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<string | null>(null)

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
        <div className="h-full grid grid-cols-5 text-3xl font-semibold">
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 0 && 'bg-white text-black',
            )}
          >
            <TbSun /> 날씨
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 1 && 'bg-white text-black',
            )}
          >
            <TbNews /> 뉴스
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 2 && 'bg-white text-black',
            )}
          >
            <TbCalendar /> 캘린더
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 3 && 'bg-white text-black',
            )}
          >
            <TbVirus /> 코로나19
          </div>
          <div
            className={classNames(
              'flex justify-center items-center gap-3 mb-8 p-3',
              current === 4 && 'bg-white text-black',
            )}
          >
            <TbToolsKitchen2 /> 급식
          </div>
        </div>
      </Transition>
    </div>
  )
}
