// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import { Link } from 'react-router-dom'
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

const TableBranches = () => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Actions</th>
          <th>Name</th>
          <th style={{Width:'200px'}}>Towns</th>
          <th>Added by</th>
          {/* <th>Status</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
          <div className='column-action d-flex align-items-center'>
        {/* <Send className='text-body cursor-pointer' size={17} id={`send-tooltip-${row.id}`} /> */}
        {/* <Send className='text-body cursor-pointer' size={17}  /> */}
        {/* <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}> */}

        {/* <Link className='text-body' to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}> */}
        {/* <Link className='text-body' to={`#`} > */}
        <Trash className='text-body cursor-pointer'  size={17} />
          <Edit2 className='text-body cursor-pointer mx-1'  size={17} />
      
        {/* </Link> */}
        {/* <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}> */}
        {/* <UncontrolledTooltip placement='top' >
          Preview Invoice
        </UncontrolledTooltip> */}
      </div>
          </td>
          <td>
            <span className='align-middle fw-bold'>South West</span>
          </td>
          <td><small>Yeovil, Taunton, Bath, Sherborne</small>
          <Button.Ripple color='flat-success' size='sm'>
            <Plus size={14} />
            <span className='align-middle ms-25'>Add</span>
          </Button.Ripple>
          </td>
          <td>
            {/* <AvatarGroup data={avatarGroupData1} /> */}
            <img className='me-75 round' src={avatar1} alt='angular' height='25' width='25' />
         
          </td>
          {/* <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td> */}
          {/* <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td> */}

        </tr>

      </tbody>
    </Table>
  )
}

export default TableBranches
