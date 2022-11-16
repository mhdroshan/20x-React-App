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
import TableUnoiform from './TableUnoiform'
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
const SidebarUnoformSize = ({ open, toggleSidebarUniformSize }) => {
  // ** States

  const handleSidebarClosedStaffTerms = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Staff Uniform Sizes'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarUniformSize={toggleSidebarUniformSize}
      onClosed={handleSidebarClosedStaffTerms}
    > 
              <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>Candidates can select their uniform size in their application form while they register with you. The uniform sizes you create here will be displayed on the application form
              </span>
            </div>
          </Alert>
          {/* <Alert color='warning'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>This is a 2 Step process. First 'Add a New Band', then select if from the drop down menu, set the days, enter rates and save it. You can edit the previously created ones or delete them from the bottom dropdown.
              </span>
            </div>
          </Alert> */}
        <hr/>
        <Row>
        <Label className='form-label' for='band-name'>
            Add staff unifrom sizes
          </Label>
          <Col sm={6}>
          <div className='demo-inline-spacing'>
          <div className='form-check'>
              <Input type='checkbox' id='maleCheck' name='genderRadio1' defaultChecked />
              <Label className='form-check-label' for='maleCheck'>
                Male
              </Label>
            </div>
            <div className='form-check'>
              <Input type='checkbox' name='genderRadio' id='femaleCheck' />
              <Label className='form-check-label' for='femaleCheck'>
                Female
              </Label>
            </div>
            </div>
          </Col>
          <Col sm={4}>
          <div className='my-1'>
              <Input id='sizeName' name='sizeName' bsSize="sm"  placeholder='Size name' />
        </div>
        </Col>
        <Col md={2}>
              <Button color='success' className='text-nowrap px-1 mt-1' size='sm' outline>
                <Check size={14}  style={{marginRight:'5px'}} />
                <span>Save</span>
              </Button>
            </Col>
            {/* <Col md={3} className='mb-md-0 mb-1'>
              <Button color='danger' className='text-nowrap px-1 mt-2' size='sm'  outline>
                <X size={14} style={{marginRight:'5px'}} />
                <span>Delete</span>
              </Button>
            </Col> */}
        
        </Row>
        <hr/>
            <TableUnoiform/>
          <hr/>

        <Button type='reset' color='secondary' outline onClick={toggleSidebarUniformSize}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarUnoformSize
