// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Icons Imports
import { User, Bookmark, Link, Bell, Settings, Users, UserPlus, DollarSign, Folder } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <User size={18} className='me-50' />
          <span className='fw-bold'>General</span>
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
          <DollarSign size={18} className='me-50' />
          <span className='fw-bold'>Fianance</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Folder size={18} className='me-50' />
          <span className='fw-bold'>Documents</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '6'} onClick={() => toggleTab('6')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Admin Users/ role</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '7'} onClick={() => toggleTab('7')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Notification</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '8'} onClick={() => toggleTab('8')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Module manager</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
