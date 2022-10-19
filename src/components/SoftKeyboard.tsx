import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { TbArrowsMaximize, TbCircleDot } from 'react-icons/tb'
import sidecarChild from '../modules/SidecarChild'

interface SoftKeyboardProps {
  show?: boolean
}

const PANEL = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '지움'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
  [null, <small>↑SHIFT</small>, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', null],
  [null, null, '한/영', '특수', '', '확인', '닫기', null, null],
]

export default function SoftKeyboard({ show }: SoftKeyboardProps) {
  const [direction, setDirection] = useState<string | null>(null)
  const [current, setCurrent] = useState([0, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      const newDirection = sidecarChild.data.direction

      if (direction !== newDirection) {
        if (newDirection?.includes('l')) {
          if (current[1] > 0) setCurrent([current[0], current[1] - 1])
        }
        if (newDirection?.includes('r')) {
          if (current[1] < PANEL[current[0]].length - 1) {
            console.log('asd')
            setCurrent([current[0], current[1] + 1])
          }
        }
        if (newDirection?.includes('f')) {
          if (current[0] > 0) {
            setCurrent([current[0] - 1, Math.min(current[1], PANEL[current[0] - 1].length)])
          }
        }
        if (newDirection?.includes('b')) {
          if (current[0] < PANEL.length - 1) {
            setCurrent([current[0] + 1, Math.min(current[1], PANEL[current[0] + 1].length)])
          }
        }
      }

      setDirection(newDirection)
    })

    return () => clearInterval(interval)
  })

  console.log(current)

  return (
    <div className="fixed inset-x-0 bottom-0 w-screen z-[99999] px-4 py-3">
      <Transition
        show={show}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="opacity-0 translate-y-48"
        enterTo="opacity-100 translate-y-0 bg-black/50 backdrop-blur-sm"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="opacity-100 translate-y-0 bg-black/50 backdrop-blur-sm"
        leaveTo="opacity-0 translate-y-48"
      >
        <div className="text-sm flex justify-end items-center gap-2 mb-2">
          <span className="flex gap-2 items-center">
            <TbArrowsMaximize className="rotate-45" /> 커서 이동
          </span>
          <span>|</span>
          <span className="flex gap-2 items-center">
            <TbCircleDot size={18} /> 선택
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {PANEL.map((row, i) => (
            <div key={i} className="flex gap-2">
              {row.map((one, j) =>
                one !== null ? (
                  <button
                    key={j}
                    type="button"
                    className={classNames(
                      'border hover:border-white hover:bg-white hover:text-black transition-all duration-200 border-white/25 mx-auto rounded-md py-1',
                      one === '' ? 'w-2/5 flex-shrink-0' : 'w-full',
                      PANEL[current[0]][current[1]] === one && 'border-white bg-white text-black',
                    )}
                  >
                    {one}
                  </button>
                ) : (
                  <div key={j} className="w-1/3"></div>
                ),
              )}
            </div>
          ))}
        </div>
      </Transition>
    </div>
  )
}
