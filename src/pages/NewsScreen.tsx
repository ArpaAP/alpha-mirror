import MainLayout from '../components/MainLayout'

export default function NewsScreen() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex gap-6 items-center">
          <div className="text-xl font-semibold w-full">
            <input
              type="text"
              className="bg-transparent text-white w-full outline-none mb-2"
              placeholder="뉴스 검색"
            />
            <hr className="border-white w-full" />
          </div>
        </div>

        <div className="grid grid-cols-4"></div>
      </div>
    </MainLayout>
  )
}
