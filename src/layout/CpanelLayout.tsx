import SideMenu from './SideMenu'
import BotomMenu from './BotomMenu'
import { Outlet } from 'react-router-dom'

const CpanelLayout: React.FC = () => {
  return (
    <div className='grid grid-cols-12 h-screen overflow-hidden bg-green-400 md:p-8 p-4 gap-x-4  relative '>
      <div className='col-span-2 h-full boder border-black rounded-2xl p-4 bg-white shadow-lg lg:block hidden'>
        <SideMenu />
      </div>
      <div className='lg:col-span-10 col-span-12 h-full border-black rounded-2xl md:p-8 p-4 bg-white shadow-lg relative'>
        <Outlet />
        <BotomMenu />
      </div>
    </div>
  )
}
export default CpanelLayout
