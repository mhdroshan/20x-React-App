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

const TableStaffStatus = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Actions</th>
          <th>Name</th>
          <th>Color</th>
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
            <span className='align-middle fw-bold'>
              <Badge color='light-secondary'>Inactive</Badge>
            </span>
          </td>
          <td>Grey</td>
        </tr>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
            <span className='align-middle fw-bold'>
              <Badge color='light-warning'>False documents</Badge>
            </span>
          </td>
          <td>Orange</td>
        </tr>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
            <span className='align-middle fw-bold'>
              <Badge color='light-success'>Active</Badge>
            </span>
          </td>
          <td>Green</td>
        </tr>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
            <Trash className='text-body cursor-pointer'  size={17} />
            <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
          </div>
          </td>
          <td>
            <span className='align-middle fw-bold'>
              <Badge color='light-danger'>On Leave</Badge>
            </span>
          </td>
          <td>Red</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableStaffStatus
