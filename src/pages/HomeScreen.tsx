import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import { Command } from '@tauri-apps/api/shell'
import sidecarChild from '../modules/SidecarChild'

function HomeScreen() {
  const [time, setTime] = useState(dayjs())
  const navigate = useNavigate()
  const [btnClicked, setBtnClicked] = useState(false)
  const [direction, setDirection] = useState<string | null>(null)

  const { data, mutate } = useSWR(
    'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
    (url) =>
      axios
        .get(url, {
          params: {
            serviceKey:
              '1bd+tL1dNc9U57l7zVmpC0au/r9+ZhZ7dFBOUK5oJauUA9nDSFlqX17wpO4AhUDvlLh4GiqwuEnhaopTfWLVJw==',
            numOfRows: 1000,
            pageNo: 1,
            base_date: '20221015',
            base_time: '2300',
            dataType: 'json',
            nx: 87,
            ny: 90,
          },
        })
        .then((r) => r.data),
    {
      refreshInterval: 1000 * 60 * 5,
    },
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    const sleepInterval = setInterval(() => {
      navigate('/')
    }, 1000 * 60 * 5)

    return () => {
      clearInterval(interval)
      clearInterval(sleepInterval)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(sidecarChild.data.direction)
      setBtnClicked(sidecarChild.data.joystick!.isSwitchPressed)
    }, 100)

    return () => clearInterval(interval)
  })

  const items = data?.response?.body?.items?.item as any[]
  const nowData = items?.filter(
    (o) => o.fcstDate === time.format('YYYYMMDD') && o.fcstTime === time.format('HH[00]'),
  )

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
      <div className="font-semibold text-xl">
        조이스틱 모듈: {direction ?? '정지'} {btnClicked && ', 버튼 클릭됨'}
      </div>

      <div className="mt-auto flex items-center gap-4">
        <div className="flex gap-2">
          <span className="text-5xl font-normal">
            {nowData?.find((o) => o.category === 'TMP').fcstValue}
          </span>
          <span className="text-2xl font-light">°C</span>
        </div>

        <div className="text-sm">달서구 신당동</div>
      </div>
    </div>
  )
}

export default HomeScreen
