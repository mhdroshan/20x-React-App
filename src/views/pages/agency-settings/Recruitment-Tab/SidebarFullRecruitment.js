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
const SidebarFullRecruitment = ({ open, toggleSidebarRecruitmentModule }) => {
  // ** States

  const handleSidebarFullRecruitment = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Registration Configuration'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarRecruitmentModule={toggleSidebarRecruitmentModule}
      onClosed={handleSidebarFullRecruitment}
    > 

        <div className='mb-2'>
        <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
            <div className='form-switch form-check-success'>
            <Label for='modayLabel' className='form-check-label mb-50'>
              Full recruitment module
              </Label>
              <Input type='switch' defaultChecked id='modayLabel' name='modayLabel' />
                <CustomLabel htmlFor='modayLabel' />
              </div>
            </div>
          </div>
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>You can shorten your candidate registration form by turning off some of these sections if they are not needed
              </span>
            </div>
          </Alert>
          <Table hover responsive>
      <thead>
        <tr>
          <th>Menu name</th>
          <th>Mandatory</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>
        <div className='form-check form-check-inline'>
            <Input type='checkbox'  id='menuCheck1' />
            <Label for='menuCheck1' className='form-check-label'>
            Address Details <br/>
            <FormText color='warning'>If this is made mandatory then the application will ask for 5 years address from the candidate</FormText>
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
            Skills
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
            Next of Kin
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

        <Button type='reset' color='secondary' outline onClick={toggleSidebarRecruitmentModule}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarFullRecruitment
