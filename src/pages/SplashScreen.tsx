import { invoke } from '@tauri-apps/api/tauri'
import { useEffect, useRef } from 'react'

function LockScreen() {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
    })
    setTimeout(() => {
      ref.current!.style.backgroundColor = 'black'
    }, 1500)
    setTimeout(() => invoke('close_splashscreen'), 2000)
  })

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="bg-white text-black mt-5 p-10 flex flex-col justify-center items-center h-screen transition-all duration-500"
    >
      <div className="text-5xl font-light">
        <b className="font-semibold">Alpha</b>Mirror
      </div>
      <div className="mt-10 text-lg">불러오는 중</div>
    </div>
  )
}

export default LockScreen
