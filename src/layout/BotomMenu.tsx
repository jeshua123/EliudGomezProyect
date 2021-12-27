import EventIcon from '@mui/icons-material/Event'
import HistoryIcon from '@mui/icons-material/History'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddIcon from '@mui/icons-material/Add'
const BotomMenu: React.FC = () => {
  return (
    <>
      <div className='lg:hidden h-14 bg-white w-full absolute  bottom-0 left-0 rounded-b-2xl flex justify-between items-start  border border-gray-400  '>
        <button className='bg-white w-2/12 h-5/6 text-gray-900  rounded-bl-2xl pt-2 relative'>
          <div className='absolute bg-black top-0 h-0.5  w-full'></div>
          <AccountCircleIcon />
          <p className='text-xs '>Cuenta</p>
        </button>
        <button className='bg-white w-2/12 h-5/6 text-gray-500 pt-2 relative'>
          <HistoryIcon />
          <p className='text-xs'>Historial</p>
        </button>
        <button className='bg-white w-2/12 h-5/6 text-gray-500 pt-2 relative'>
          <ContactMailIcon />
          <p className='text-xs'>Roles</p>
        </button>
        <button className='bg-white w-2/12  h-5/6 text-gray-500 pt-2 relative'>
          <EventIcon />
          <p className='text-xs '>Evento</p>
        </button>
        <button className='w-2/12 rounded-br-2xl h-5/6  text-green-400 pt-2 relative'>
          <AddIcon />
          <p className='text-xs'>Agregar</p>
        </button>
      </div>
    </>
  )
}
export default BotomMenu
