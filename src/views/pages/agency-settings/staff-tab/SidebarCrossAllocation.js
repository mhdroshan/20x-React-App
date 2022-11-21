// ** React Import
// import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
// import { SlideDown } from 'react-slidedown'
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, UncontrolledTooltip, Form, Row, Col, Table} from 'reactstrap'
import { Info, Plus, X, Check } from 'react-feather'
import { selectThemeColors } from '@utils'
import Select from 'react-select' // eslint-disable-line
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
// SWITCH ICONS
const CustomLabel = ({ htmlFor }) => {
  return (
    <Label className='form-check-label' htmlFor={htmlFor}>
      <span className='switch-icon-left'>
        <Check size={14} />
      </span>
      <span className='switch-icon-right'>
        <X size={14} />
      </span>
    </Label>
  )
}
const JobRoles = [
  {
    label: 'Job roles',
    options: [
      { value: 'HCA', label: 'HCA' },
      { value: 'RGN', label: 'RGN' },
      { value: 'SHCA', label: 'SHCA' },
      { value: 'KA', label: 'KA' }
    ]
  }
]
const SidebarCrossAllocation = ({ open, toggleSidebarCrossAllocation }) => {
  // ** States
  const handleSidebarCrossAllocation = () => {
     
  }
  return (
    <Sidebar
    size='lg'
    open={open}
    style={{maxWidth:'90%', width:'45em'}}
    title='Edit/Add Job Role Cross Alloication'
    headerClassName='mb-1'
    contentClassName='pt-0'
   
    toggleSidebarCrossAllocation={toggleSidebarCrossAllocation}
    onClosed={handleSidebarCrossAllocation}
  > 
  <Row>
  <Col sm='12' className='mb-2'>
  <Label className='form-label' for='user-role-select'>
Pick a Job role to apply cross allocation
  </Label>
  <Select
  isClearable={false}
  theme={selectThemeColors}
  defaultValue={JobRoles[0]}
  options={JobRoles}
  className='react-select'
  classNamePrefix='select'
/>
</Col>
</Row>

        <Alert color='warning'>
          <div className='alert-body'>
            <Info size={18}   id='UnControlledExample'/>
            <span className='ms-1'>Cross allocate a different role to the above selected job role
            </span>
          </div>
        </Alert>
        <Table hover responsive>
    <thead>
      <tr>
        <th>Post Name</th>
        <th>Is same rate?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>
      <div className='form-check form-check-inline'>
          <Input type='checkbox'  id='menuCheck1' />
          <Label for='menuCheck1' className='form-check-label'>
          Registered Nurse <br/>
          
          </Label>
        </div>
      </td>
      <td>
      <div className='form-switch form-check-success'>
        <Input type='switch' defaultChecked id='menuIsMnadatory' name='menuIsMnadatory' />
              <CustomLabel htmlFor='menuIsMnadatory' />
          </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className='form-check form-check-inline'>
          <Input type='checkbox'  id='menuCheck2' />
          <Label for='menuCheck2' className='form-check-label'>
          Healthcare Assistant
          </Label>
        </div>
      </td>
      <td>
      <div className='form-switch form-check-success'>
        <Input type='switch' defaultChecked id='menuIsMnadatory1' name='menuIsMnadatory1' />
              <CustomLabel htmlFor='menuIsMnadatory1' />
          </div>
      </td>
      </tr>
      <tr>
      <td>
      <div className='form-check form-check-inline'>
          <Input type='checkbox'  id='menuCheck3' />
          <Label for='menuCheck3' className='form-check-label'>
          Kitchen assistant
          </Label>
        </div>
      </td>
      <td>
      <div className='form-switch form-check-success'>
        <Input type='switch' defaultChecked id='menuIsMnadatory2' name='menuIsMnadatory2' />
              <CustomLabel htmlFor='menuIsMnadatory2' />
          </div>
      </td>
      </tr>
      </tbody>
      </Table>

      <Button type='reset' color='secondary' outline onClick={toggleSidebarCrossAllocation}>
        Close
      </Button>
        

  </Sidebar>
  )
}

export default SidebarCrossAllocation
