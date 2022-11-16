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
const SidebarPayBand = ({ open, toggleSidebarPayBand }) => {
  // ** States

  const handleSidebarClosedStaffTerms = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Staff Pay Band'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarPayBand={toggleSidebarPayBand}
      onClosed={handleSidebarClosedStaffTerms}
    > 
              <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>The software has two types of staff pay rates, Common Rate and Different Rate. In the Common Rate, all staff members who work for a client (per staff type, for example, all HCAs who work for a client) will be paid the same rate. When it comes to Different Rates, you can create Pay Bands and assign them to staff members. You can create unlimited Pay Bands, for example RGN Band 5, Senior HCA etc).
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
        <div className='mb-2'>
          <Label className='form-label' for='band-name'>
            Select staff band name
          </Label>
          <Input type='select' id='band-name' name='user-type-agrement'>
            <option value='Staff'>Common HCA Band</option>
            <option value='Client'>Fixed HCA Band</option>
          </Input>
        </div>
        
        <h5 className='h5 mb-1' style={{borderBottom:'1px solid #d8d6de', paddingBottom:'5px'}}>Create new band:</h5>

                <Form>
                  <Row className='justify-content-between align-items-center'>
                    <Col md={12} className='mb-md-0 mb-1'>
                      <Label className='form-label'>
                        Band Name
                      </Label>
                      <Input type='text' placeholder='eg: Common HCA band' />
                    </Col>
                    
                  </Row>
                  <Row>
                  <Col md={4} className='my-2'>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked2' />
                    <Label for='basic-cb-checked2' className='form-check-label'>
                      Select all
                    </Label>
                  </div>

                 {/* <div>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked4' />
                    <Label for='basic-cb-checked4' className='form-check-label'>
                      WED
                    </Label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked5' />
                    <Label for='basic-cb-checked5' className='form-check-label'>
                      THU
                    </Label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked6' />
                    <Label for='basic-cb-checked6' className='form-check-label'>
                      FRI
                    </Label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked7' />
                    <Label for='basic-cb-checked7' className='form-check-label'>
                      SAT
                    </Label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked8' />
                    <Label for='basic-cb-checked8' className='form-check-label'>
                      SUN
                    </Label>
                  </div>
                  </div> */}
                  </Col>
                  <Col md={4} className='my-2'>
                  <div className='form-check form-check-inline'>
                    <Input type='checkbox'  id='basic-cb-checked3' />
                    <Label for='basic-cb-checked3' className='form-check-label'>
                     Apply Same rates
                    </Label>
                  </div>
                  </Col>
                  </Row>
                  <Row className='mb-1'>
                  <Col md={4} style={{paddingTop:'5px'}} >
                  <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
                  <div className='form-switch form-check-success'>
                  <Label for='modayLabel' className='form-check-label mb-50'>
                    Monday
                    </Label>
                      <Input type='switch' defaultChecked id='modayLabel' name='modayLabel' />
                        <CustomLabel htmlFor='modayLabel' />
                      </div>
                  </div>
                  </Col>
                  <Col md={4} className='mb-md-0 mb-1'>
                      <Input type='number'  placeholder='Day rate' />
                    </Col>
                    <Col md={4} className='mb-md-0 mb-1'>
                      <Input type='number'  placeholder='Night rate' />
                    </Col>
                  </Row>
                  <Row>
                  
                  <Col md={4} style={{paddingTop:'5px'}}  >
                  <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
                  <div className='form-switch form-check-success'>
                  <Label for='tuesdayLabel' className='form-check-label mb-50'>
                    Tuesday
                    </Label>
                      <Input type='switch' defaultChecked id='tuesdayLabel' name='tuesdayLabel' />
                        <CustomLabel htmlFor='tuesdayLabel' />
                      </div>
                  </div>
                  </Col>
                  <Col md={4} className='mb-md-0 mb-1'>
                      <Input type='number'  placeholder='Day rate' />
                    </Col>
                    <Col md={4} className='mb-md-0 mb-1'>
                      <Input type='number'  placeholder='Night rate' />
                    </Col>
                    </Row>
                   
                    <Row>
                    <Col md={7}></Col>
                    <Col md={2}>
                      <Button color='success' className='text-nowrap px-1 mt-2' size='sm' outline>
                        <Check size={14}  style={{marginRight:'5px'}} />
                        <span>Save</span>
                      </Button>
                    </Col>
                    <Col md={3} className='mb-md-0 mb-1'>
                      <Button color='danger' className='text-nowrap px-1 mt-2' size='sm'  outline>
                        <X size={14} style={{marginRight:'5px'}} />
                        <span>Delete</span>
                      </Button>
                    </Col>
                    </Row>
              
                </Form>
          
          <hr/>
          {/* <h5 className='h5 mb-1' style={{borderBottom:'1px solid #d8d6de', paddingBottom:'5px'}}>Allocate band:</h5> */}

        <Button type='reset' color='secondary' outline onClick={toggleSidebarPayBand}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarPayBand
