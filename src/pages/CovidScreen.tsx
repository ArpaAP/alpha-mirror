import MainLayout from '../components/MainLayout'

export default function CovidScreen() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex gap-2 pb-8">
          <div className="text-base mt-auto">어제 확진</div>
          <div className="text-4xl font-semibold">+66,587명</div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-cols-8 gap-5 items-end">
            <div>
              <div className="text-sm">40,903</div>
              <div className="h-40 bg-white my-3" />
              <div className="text-sm">11/04</div>
            </div>
            <div>
              <div className="text-sm">36,675</div>
              <div className="h-36 bg-white my-3" />
              <div className="text-sm">11/05</div>
            </div>
            <div>
              <div className="text-sm">18,671</div>
              <div className="h-16 bg-white my-3" />
              <div className="text-sm">11/06</div>
            </div>
            <div>
              <div className="text-sm">62,273</div>
              <div className="h-64 bg-white my-3" />
              <div className="text-sm">11/07</div>
            </div>

            <div>
              <div className="text-sm">62,472</div>
              <div className="h-64 bg-white my-3" />
              <div className="text-sm">11/09</div>
            </div>
            <div>
              <div className="text-sm">55,365</div>
              <div className="h-56 bg-white my-3" />
              <div className="text-sm">11/10</div>
            </div>
            <div>
              <div className="text-sm">54,328</div>
              <div className="h-56 bg-white my-3" />
              <div className="text-sm">11/11</div>
            </div>
            <div>
              <div className="text-sm">48,465</div>
              <div className="h-48 bg-white my-3" />
              <div className="text-sm">11/12</div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-2 justify-center items-end">
              <div className="text-lg">위중증</div>
              <div className="text-4xl font-semibold">411</div>
            </div>

            <div className="flex gap-2 justify-center items-end">
              <div className="text-lg">신규 입원</div>
              <div className="text-4xl font-semibold">243</div>
            </div>

            <div className="flex gap-2 justify-center items-end">
              <div className="text-lg">일일 사망</div>
              <div className="text-4xl font-semibold">47</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
