// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Icons Imports
import { User, Bookmark, Link, Bell, Settings, Users, UserPlus } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <User size={18} className='me-50' />
          <span className='fw-bold'>Account</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <Users size={18} className='me-50' />
          <span className='fw-bold'>Staff </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
          <UserPlus size={18} className='me-50' />
          <span className='fw-bold'>Recruitment</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
          <Bell size={18} className='me-50' />
          <span className='fw-bold'>Notifications</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Connections</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
