import { TbArrowsLeftRight } from 'react-icons/tb'
import MainLayout from '../components/MainLayout'

export default function CalendarScreen() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="flex gap-6 items-center">
          <div className="text-xl font-semibold">
            <div className="mb-2">11월</div>
          </div>
          <div className="my-auto ml-auto">
            <span className="flex gap-2 items-center">
              <TbArrowsLeftRight /> 월 변경
            </span>
          </div>
        </div>

        <table className="w-full text-left h-80 py-5">
          <thead>
            <tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((one) => (
                <th className="w-[14.2%]">{one}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td className=" align-bottom ">
                <span>
                  <div>18</div>
                  <div className="text-sm mb-2">로봇 발표</div>
                </span>
              </td>
              <td>19</td>
            </tr>
            <tr>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
            </tr>
            <tr>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}
