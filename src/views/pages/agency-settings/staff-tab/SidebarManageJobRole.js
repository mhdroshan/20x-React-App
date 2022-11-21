// ** React Import
// import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
// import { SlideDown } from 'react-slidedown'

// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, UncontrolledTooltip, Form, Row, Col} from 'reactstrap'
import { Info, Plus, X, Check } from 'react-feather'
import Select from 'react-select' // eslint-disable-line
import TableJobRoles from './TableJobRoles'
import { selectThemeColors } from '@utils'
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

const groupedOptions = [
  {
    label: 'Sector Names',
    options: [
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Industrial', label: 'Industrial' },
      { value: 'Education', label: 'Education' },
      { value: 'Agriculture', label: 'Agriculture' }
    ]
  }
]
const SidebarManageJobRole = ({ open, toggleSidebarManageJobRole }) => {
  // ** States

  const handleSidebarClosedStaffTerms = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Add job roles'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarManageJobRole={toggleSidebarManageJobRole}
      onClosed={handleSidebarClosedStaffTerms}
    > 
              <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>You can create your staff type here. By default, the software comes with Health Care Assistant (HCA) and Registered General Nurse (RGN). Please create any other staff type your agency employs.
              </span>
            </div>
          </Alert>
        <hr/>
        <Row>
        
            <Col sm='12' className='mb-2'>
            <h5 className='h5 mb-1' style={{borderBottom:'1px solid #d8d6de', paddingBottom:'5px'}}>Create a Job Role:</h5>
              <Label className='form-label' for='position-name'>
              Position Name
              </Label>
              <Input placeholder='Eg: Health Care Assistant' id='position-name' />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='user-role-select'>
              Select a sector
              </Label>
              <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={groupedOptions[0]}
              options={groupedOptions}
              className='react-select'
              classNamePrefix='select'
            />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='position-short-form'>
              Position short form
              </Label>
              <Input type='number' placeholder='HCA' id='position-short-form' />
            </Col>
            <Col className='d-grid' sm='12'>
              <Button color='success'>Save</Button>
            </Col>
          </Row>
       
        <h5 className='h5 mb-1 mt-3' style={{borderBottom:'1px solid #d8d6de', paddingBottom:'5px'}}>Job roles:</h5>
           <TableJobRoles/>
        

        <Button type='reset' color='secondary' outline onClick={toggleSidebarManageJobRole}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarManageJobRole
