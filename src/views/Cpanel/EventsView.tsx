import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const EventsView: React.FC = () => {
  return (
    <div className='relative h-full overflow-auto'>
      <h4 className='text-green-400'>Eventos en curso</h4>
      <Fab className='bg-green-400 absolute bottom-0 right-0 lg:block hidden'>
        <AddIcon className='text-white' />
      </Fab>
    </div>
  )
}

export default EventsView
