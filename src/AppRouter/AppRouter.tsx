import UiKitView from 'assets/UiKit/UiPage/UiView'
import routes from 'constants/routes'
import CpanelLayout from 'layout/CpanelLayout'
import { Routes, Route } from 'react-router-dom'
import EventsView from 'views/Cpanel/EventsView'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.ui_kit} element={<UiKitView />} />
      <Route path={routes.cpanel_layout.index} element={<CpanelLayout />}>
        <Route path={`${routes.cpanel_layout.admin.events}`} element={<EventsView />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
