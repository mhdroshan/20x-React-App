// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Icons Imports
import { Edit2, Plus, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledTooltip, Button } from 'reactstrap'

// const avatarGroupData2 = [
//   {
//     title: 'Quinlan',
//     img: avatar1,
//     imgHeight: 26,
//     imgWidth: 26
//   },
//   {
//     title: 'Patrick',
//     img: avatar2,
//     imgHeight: 26,
//     imgWidth: 26
//   },
//   {
//     title: 'Castor',
//     img: avatar3,
//     imgHeight: 26,
//     imgWidth: 26
//   }
// ]

const TableJobRoles = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Actions</th>
          <th>Role name</th>
          <th>Short Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
           Healthcare Assistant
          </td>
          <td>HCA</td>
        </tr>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
            Registered Nurse
          </td>
          <td>RGN</td>
        </tr>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
            Kitchen Assistant
          </td>
          <td>KA</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableJobRoles
