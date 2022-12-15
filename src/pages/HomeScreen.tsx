import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import sidecarChild from '../modules/SidecarChild'
import MainLayout from '../components/MainLayout'

export default function HomeScreen() {
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
            base_date: time.format('YYYYMMDD'),
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
    <MainLayout>
      <div className="mt-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="text-5xl font-normal">
              {nowData?.find((o) => o.category === 'TMP').fcstValue}
            </span>
            <span className="text-2xl font-light">5.3°C</span>
          </div>

          <div className="text-sm">달서구 신당동</div>
        </div>
      </div>
    </MainLayout>
  )
}
