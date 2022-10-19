import { Transition } from '@headlessui/react'

interface SoftKeyboardProps {
  show?: boolean
}

export default function Topbar({ show }: SoftKeyboardProps) {
  return (
    <div className="fixed inset-0 z-[99999] px-4">
      <Transition
        show={show}
        enter="transition-all duration-500 ease-out"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100 bg-black/50 backdrop-blur-sm"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="opacity-100 scale-100 bg-black/50 backdrop-blur-sm"
        leaveTo="opacity-0 scale-110"
      >
        <div className="flex flex-col justify-center h-screen w-2/3 mx-auto py-3 items-center gap-10">
          <div className="text-center text-xl font-medium">시스템 메뉴</div>
          <div className="flex gap-5">
            <div className="bg-white text-2xl flex justify-center items-center rounded-3xl text-black w-24 h-24">
              WI-FI
            </div>
            <div className="bg-white text-lg flex justify-center items-center rounded-3xl text-black w-24 h-24">
              Bluetooth
            </div>
            <div className="border border-white text-base text-center flex justify-center items-center rounded-3xl w-24 h-24">
              아두이노 통신 재시작
            </div>
            <div className="border border-white text-base text-center flex justify-center items-center rounded-3xl w-24 h-24">
              시스템 종료
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
