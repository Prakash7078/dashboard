import Sidebar from '../components/sidebar'
import { BsRocket } from 'react-icons/bs'
import BarCharts from './BarCharts'
import PieCharts from './PieCharts'

function Dashboard() {
    return (
        <div>
            <Sidebar/>
            <div className=' lg:pl-72'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 lg:gap-5 px-10'>
                    <div className="box cursor-pointer transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 flex justify-center items-center flex-col bg-brown-200 h-48 rounded-lg lg:h-40 ">
                    <BsRocket className='scale-150'/>
                    <span className='pt-6 flex flex-col gap-3'>
                        <h1>Sellers</h1>
                        <p className='mx-auto font-bold'>{10}</p>
                    </span>
                    </div>
                    <div className="box cursor-pointer transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 flex justify-center items-center flex-col bg-brown-200 h-48 rounded-lg lg:h-40 ">
                    <BsRocket className='scale-150'/>
                    <span className='pt-6 flex flex-col gap-3'>
                        <h1>Buyers</h1>
                        <p className='mx-auto font-bold'>{20}</p>
                    </span>
                    </div>
                    <div className="box cursor-pointer transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 flex justify-center items-center flex-col bg-brown-200 h-48 rounded-lg lg:h-40 ">
                    <BsRocket className='scale-150'/>
                    <span className='pt-6 flex flex-col gap-3'>
                        <h1>Storage Houses</h1>
                        <p className='mx-auto font-bold'>{15}</p>
                    </span>
                    </div>
                </div>
                <div className='mt-10 flex flex-col '>
                    <div>
                        <PieCharts/>
                    </div>
                    <div>
                        <BarCharts/>
                    </div>
                   
                </div>
            </div>
        </div>
      )
}

export default Dashboard