import { List, ListItemButton, ListItemIcon } from '@mui/material'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import { NavLink } from 'react-router-dom'
import routes from 'constants/routes'

const menuList = [
  { to: routes.cpanel_layout.admin.events, title: 'Eventos en curso' },
  { to: routes.cpanel_layout.admin.events_history, title: 'Historial' },
  { to: routes.cpanel_layout.admin.rols, title: 'Roles' },
  { to: routes.cpanel_layout.admin.profile, title: 'Perfil' },
]

const SideMenu: React.FC = () => {
  return (
    <div className='relative h-full'>
      <div className='h-28 w-28 mx-auto bg-green-400 mt-8 rounded-full flex justify-center items-center cursor-pointer'>
        <h2 className='text-white'>Eg</h2>
      </div>

      <List className='mt-8' component='nav'>
        {menuList.map((item) => {
          return (
            <ListItemButton className='px-2'>
              <NavLink to={item.to} className={(navData) => (navData.isActive ? 'text-green-800' : 'text-black')}>
                <p className='p--lg font-medium'>{item.title}</p>
              </NavLink>
            </ListItemButton>
          )
        })}
      </List>

      <h6 className='text-center absolute w-full bottom-8 text-green-800 cursor-pointer'>
        <u>Cerrar sesión</u>
      </h6>
    </div>
  )
}

export default SideMenu
