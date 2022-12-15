import { TbArrowsLeftRight } from 'react-icons/tb'
import MainLayout from '../components/MainLayout'

export default function MealScreen() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex gap-3">
          <div className="w-1/3 rounded-xl border border-white h-72 p-4">
            <div className="mb-4 text-xl font-medium">모레</div>
            <div style={{ wordBreak: 'break-all' }}>
              *작은밥(찹쌀현미) *크림스프 (2.5.6.13.) *양상추샐러드(유자드레싱) (5.6.11.12.13.)
              *로제스파게티(주) (1.2.5.6.10.12.13.)
              *함박스테이크/후르츠소스(1.2.5.6.10.11.12.13.16.) *아삭피클
            </div>
          </div>
          <div className="w-1/3 rounded-xl border border-white h-72 p-4">
            <div className="mb-4 text-xl font-medium">11월 21일 (월)</div>
            <div style={{ wordBreak: 'break-all' }}>
              *찰보리밥 *들깨수제비국 (5.6.) *동초겉절이 (5.6.13.) *김치전 (1.5.6.9.)
              *닭봉떡오븐구이 (5.6.13.15.) *총각김치 (9.)
            </div>
          </div>
          <div className="w-1/3 rounded-xl border border-white h-72 p-4">
            <div className="mb-4 text-xl font-medium">11월 22일 (화)</div>
            <div style={{ wordBreak: 'break-all' }}>
              *차수수밥 *청국장찌개 (5.6.9.13.) *탕수육/소스 (1.5.6.10.11.12.13.) *탕평채 (5.13.16.)
              *배추김치 (9.) *수제마늘식빵 (1.2.6.)
            </div>
          </div>
          <div className="w-1/3 rounded-xl border border-white h-72 p-4">
            <div className="mb-4 text-xl font-medium">11월 23일 (수)</div>
            <div style={{ wordBreak: 'break-all' }}>
              *쇠고기톳밥/양념장 (5.6.16.) *들깨무채국 (5.6.) *비엔나메추리알폭찹
              (1.2.5.6.10.12.13.) *배추김치 (9.) *불닭퀘사디아 (2.5.6.10.12.13.15.) *초코우유 (2.)
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 gap-3">
          <TbArrowsLeftRight /> 날짜 이동
        </div>
      </div>
    </MainLayout>
  )
}
