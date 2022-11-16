
import { FileText, Settings, Square, UserCheck } from 'react-feather'
// ** Navigation imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
// import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
const agencySettings = [
    {
        id: 'agencySettings',
        title: 'Admin Settings',
        icon: <Settings size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/agency-settings'
      }
]

// ** Merge & Export
// export default [...dashboards, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...charts, ...others]
export default [...dashboards, ...agencySettings, ...pages, ...apps,  ...uiElements, ...forms, ...tables, ...charts]
