import { TbSun } from 'react-icons/tb'
import MainLayout from '../components/MainLayout'

export default function WeatherScreen() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex py-4 gap-6 items-center">
          <div className="text-5xl font-semibold flex gap-2">
            <TbSun />
            <span>5.3°</span>
          </div>

          <div className="mt-auto">
            <div className="text-2xl font-medium">맑음</div>
            <div className="font-medium mt-auto">최저 5 | 최고 22</div>
          </div>
        </div>

        <div className="grid grid-cols-8 py-4 gap-6 items-center mb-4">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">지금</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">7°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 1시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">7°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 2시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">7°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 3시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">7°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 4시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">6°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 5시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">5°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 6시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">4°</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="text-sm">오전 7시</div>
            <TbSun size={22} />
            <div className="text-lg font-medium">5°</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 px-6">
          <div className="flex gap-5 items-center">
            <div className="w-1/6">내일</div>
            <TbSun size={18} />
            <div>최저 4° | 최고 15°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">모레</div>
            <TbSun size={18} />
            <div>최저 5° | 최고 17°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">토</div>
            <TbSun size={18} />
            <div>최저 6° | 최고 22°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">일</div>
            <TbSun size={18} />
            <div>최저 7° | 최고 21°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">월</div>
            <TbSun size={18} />
            <div>최저 5° | 최고 15°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">화</div>
            <TbSun size={18} />
            <div>최저 3° | 최고 12°</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">수</div>
            <TbSun size={18} />
            <div>최저 4° | 최고 18</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-1/6">목</div>
            <TbSun size={18} />
            <div>최저 8° | 최고 20°</div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
