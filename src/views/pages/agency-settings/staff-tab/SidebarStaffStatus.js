// ** React Import
// import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
// import { SlideDown } from 'react-slidedown'
// import { selectThemeColors } from '@utils'
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, UncontrolledTooltip, Form, Row, Col} from 'reactstrap'
import { Info, Plus, X, Check } from 'react-feather'
import TableStaffStatus from './TableStaffStatus'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
// SWITCH ICONS


const SidebarStaffStatus = ({ open, toggleSidebarStaffStatus }) => {
  // ** States

  const handleSidebarStaffStatus = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Staff Status'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarStaffStatus={toggleSidebarStaffStatus}
      onClosed={handleSidebarStaffStatus}
    > 

          {/* <Alert color='warning'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>This is a 2 Step process. First 'Add a New Band', then select if from the drop down menu, set the days, enter rates and save it. You can edit the previously created ones or delete them from the bottom dropdown.
              </span>
            </div>
          </Alert>
        <hr/> */}
        <Row>
        <Label className='form-label' for='band-name'>
            Add staff status tags
          </Label>
          <Col md={6}>
          <div className='my-1'>
              <Input id='sizeName' name='sizeName'  placeholder='Enter Status title' />
        </div>
        </Col>
        <Col md={4}>
          <div className='my-1'>
          <Input type='select' name='select'  id='statusColours'>
            <option>Green</option>
            <option>Orange</option>
            <option>Red</option>
            <option>Grey</option>
            <option>Theme</option>
            <option>Blue</option>
          </Input>
          </div>
        </Col>
        <Col md={2}>
              <Button color='success'  className='text-nowrap px-1 mt-1'  outline>
                <Check size={14}  style={{marginRight:'5px'}} />
                <span>Save</span>
              </Button>
            </Col>
        
        </Row>
        <hr/>
            <TableStaffStatus/>
          <hr/>

        <Button type='reset' color='secondary' outline onClick={toggleSidebarStaffStatus}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarStaffStatus
