// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
import Nouislider from 'nouislider-react'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import Select from 'react-select' // eslint-disable-line
import '@styles/react/libs/noui-slider/noui-slider.scss'
import ModalPaymentCondfirmation from './ModalPaymentConfirmation'
import RightToWork from './RigntToWork'
import ProfilePercentage from './ProfilePercentage'
import ShiftVisibility from './ShiftVisibility'
import ShiftCancellation from './ShiftCancellation'
// ** Third Party Components
// import { selectThemeColors } from '@utils'
import { Info, DollarSign, Underline, Check, X, Tag, Bell, Image, GitMerge, Users } from 'react-feather'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'

import SidebarPayBand from './SidebarPayBand'
import SidebarUnoformSize from './SidebarUnoformSize'
import SidebarStaffStatus from './SidebarStaffStatus'
import SidebarComplRemind from './SidebarComplRemind'
import SidebarManageJobRole from './SidebarManageJobRole'
import SidebarCrossAllocation from './SidebarCrossAllocation'

// ** Custom Components


// const showErrors = (field, valueLen, min) => {
//   if (valueLen === 0) {
//     return `${field} field is required`
//   } else if (valueLen > 0 && valueLen < min) {
//     return `${field} must be at least ${min} characters`
//   } else {
//     return ''
//   }
// }
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


const StaffTabContent = () => {
  // const [cardType, setCardType] = useState('')
  // tooltips states
  // const [tooltipOpen1, settooltipOpen1] = useState(false)
  // const [tooltipOpen3, settooltipOpen3] = useState(false)
  // const [tooltipOpen4, settooltipOpen4] = useState(false)
  // const [tooltipOpen5, settooltipOpen5] = useState(false)


  // ** Hooks
  // const {
  //   formState: { errors }
  // } = useForm({
  //   defaultValues,
  //   resolver: yupResolver(SignupSchema)
  // })

  const [sidebarOpenPayBand, setSidebarPayBandOpen] = useState(false)
  const [sidebarOpenUniformSize, setSidebarUnifromSizeOpen] = useState(false)
  const [sidebarOpenStaffStatus, setSidebarStaffStatus] = useState(false)
  const [sidebarOpenCompRemind, setSidebarCompRemind] = useState(false)
  const [sidebarOpenManageJobRole, setSidebarManageJobRole] = useState(false)
  const [sidebarOpenCrossAllocation, setSidebarCrossAllocation] = useState(false)

  const toggleSidebarPayBand = () => setSidebarPayBandOpen(!sidebarOpenPayBand)
  const toggleSidebarUniformSize = () => setSidebarUnifromSizeOpen(!sidebarOpenUniformSize)
  const toggleSidebarStaffStatus = () => setSidebarStaffStatus(!sidebarOpenStaffStatus)
  const toggleSidebarComplRemind = () => setSidebarCompRemind(!sidebarOpenCompRemind)
  const toggleSidebarManageJobRole = () => setSidebarManageJobRole(!sidebarOpenManageJobRole)
  const toggleSidebarCrossAllocation = () => setSidebarCrossAllocation(!sidebarOpenCrossAllocation)

  return (
    
    <Fragment>
    <Row>
      <Col sm='6' lg='4'>
      <Col sm='12'  className='mb-1'>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<DollarSign size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Pay Bands</h6>
                      <small>Set pay bands</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarPayBand} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
         </Col>
         <Col sm='12' className='mb-1'>
          <Card className='card-transaction'>
                <CardBody>
                  <div className='transaction-item'>
                      <div className='d-flex'>
                        <Avatar className='rounded' color='light-success' icon={<Underline size={18} />} />
                        <div>
                          <h6 className='transaction-title'>Uniform Sizes</h6>
                          <small>Edit uniform size</small>
                        </div>
                      </div>
                      <Button  onClick={toggleSidebarUniformSize} color='success btn-sm'>Edit</Button>
                    </div>
                </CardBody>
              </Card>
          </Col>
      <Col sm='12' className='mb-1'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Tag size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Staff Status Manager</h6>
                      <small>Edit staff status</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarStaffStatus} color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
      </Col>
      <Col sm='12' className='mb-1'>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Image size={18} />} />
                    <div>
                      <h6 className='transaction-title'>ID Badges</h6>
                      <small>Choose an ID badge design</small>
                    </div>
                  </div>
                  <Button  color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
      </Col>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      {/* <Col sm='12' className='mb-1'>
      <Card>
      <CardHeader>
          <CardTitle tag='h4'>Payment Confirmations</CardTitle>
        </CardHeader>
      <CardBody style={{paddingBottom:'15px'}}>
          <div className='d-flex flex-row justify-content-between w-100 my-1' >
            <Label for='emailConfirmation' className='form-check-label mb-50'>
            Email confirmation
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='emailConfirmation' name='emailConfirmation' />
              <CustomLabel htmlFor='emailConfirmation' />
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between w-100 my-1' >
            <Label for='terminatStaff' className='form-check-label mb-50'>
            Terminate staff even if they have payment pending in staff manager
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='terminatStaff' name='terminatStaff' />
              <CustomLabel htmlFor='terminatStaff' />
            </div>
          </div>
          
      </CardBody>
      </Card>
      </Col> */}
      <Col sm='12' className='mb-1'>
      <ModalPaymentCondfirmation />
      </Col>
      <Col sm='12' className='mb-1'>
      <RightToWork />
      </Col>
      <Col sm='12' className='mb-1'>
        <ShiftCancellation />
      {/* <Card>
      <CardHeader>
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Shift Cancellation Charges
          <Info size={20} id='cancellationTooltip' color='#9e9e9e' />
          <Tooltip
        placement='left'
        isOpen={tooltipOpen3}
        target='cancellationTooltip'
        toggle={() => settooltipOpen3(!tooltipOpen3)}
      >
      In order to discourage staff from last minute cancellations and no-shows, the mobile app will flag a warning message with cancellation charge if they try to cancel a booked and confirmed shift. Please change the text and the amount as required.
      </Tooltip>
      </CardTitle>
        </CardHeader>
      <CardBody style={{paddingBottom:'15px'}}>
          <Input id='cancellationText' type='textarea' name='cancellationText' placeholder='enter cancellation message here' />
          <Col className='d-grid mt-1' sm='12'>
              <Button color='success'>Save</Button>
            </Col>
      </CardBody>
      </Card> */}
      </Col>
      <Col sm='12' className='mb-1'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Users size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Job roles</h6>
                      <small>Edit/add job role</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarManageJobRole} color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
      </Col>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      {/* <Col sm='12' className='mb-1'>
      <Card>
      <CardHeader style={{paddingBottom:'12px'}}> 
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Right To Work Limit
          <Info size={20} id='ControlledExample' jobroleTooltip color='#9e9e9e' />
      <Tooltip
        placement='left'
        isOpen={tooltipOpen1}
        target='ControlledExample'
        toggle={() => settooltipOpen1(!tooltipOpen1)}
      >
       Set your Student VISA [Right To Work Limit Config Option] here.
      </Tooltip>
          </CardTitle>
        </CardHeader>
      <CardBody style={{paddingBottom:'0'}}>
          <div className='d-flex flex-row justify-content-between w-100 my-1' >
            <Label for='studentVisa' className='form-check-label mb-10'>
            Student VISA configuration
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='studentVisa' name='studentVisa' />
              <CustomLabel htmlFor='studentVisa' />
            </div>
          </div>          
      </CardBody>
      </Card>
      </Col> */}
      <Col sm='12' className='mb-1'>
      <ShiftVisibility />
        {/* <Card>
        <CardHeader>
            <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Shift Visibility in Mobile App
            <Info size={20} id='shiftvisibTooltip' jobroleTooltip color='#9e9e9e' />
            <Tooltip
        placement='left'
        isOpen={tooltipOpen4}
        target='shiftvisibTooltip'
        toggle={() => settooltipOpen4(!tooltipOpen4)}
      >
      Configuration of Student visa staff for their shift visibility in Upcoming and Completed shifts.
      </Tooltip>
            </CardTitle>
          </CardHeader>
        <CardBody style={{paddingBottom:'0'}}>
            <Form>
            <Label className='form-check-label mb-10'>
            Choose number of shifts to display
              </Label>
            <div className='demo-inline-spacing'>
              <div className='form-check my-1'>
                <Input type='radio' id='stdVisaChoose1' name='stdVisaChoose' defaultChecked />
                <Label className='form-check-label' for='stdVisaChoose1'>
                  1
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChoose2' />
                <Label className='form-check-label' for='stdVisaChoose2'>
                  2
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChoose3' />
                <Label className='form-check-label' for='stdVisaChoose3'>
                  3
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChooseAll' />
                <Label className='form-check-label' for='stdVisaChooseAll'>
                  All
                </Label>
              </div>
            </div>
          </Form>         
        </CardBody>
        </Card> */}
      </Col>
      <Col sm='12' className='mb-1'>
        <ProfilePercentage />
      {/* <Card>
      <CardHeader>
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Profile % for staff profile activation
          <Info size={20} id='profilePercentTooltip' jobroleTooltip color='#9e9e9e' />
          <Tooltip
        placement='left'
        isOpen={tooltipOpen5}
        target='profilePercentTooltip'
        toggle={() => settooltipOpen5(!tooltipOpen5)}
      >
     This relates to the minimum percentage of candidate profile (in their registration form) required to activate them. Even if the profile percentage is less, you have the ability to force activate them from their ‘Activation & Settings’ menu
      </Tooltip>
          </CardTitle>
        </CardHeader>
      <CardBody style={{paddingBottom:'0'}}>
          <div className='mb-1'>
          <Label className='form-label' for='default-range'>
          Select profile percentage
          </Label>

        <div class="range">
          <input type="range" class="form-range" id="profilePercRange" />
        </div>
        </div>        
      </CardBody>
      </Card> */}
      </Col>
      <Col sm='12' className='mb-1'>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Bell size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Compliance Expiry Reminder</h6>
                      <small>Documents & compliance  reminder</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarComplRemind} color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
      </Col>
      <Col sm='12' className='mb-1'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<GitMerge size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Cross Allocation</h6>
                      <small>Edit/add job cross allocation</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarCrossAllocation} color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
      </Col>
      </Col>
    
      </Row>
      {/* modal */}
      
      <SidebarPayBand open={sidebarOpenPayBand} toggleSidebarPayBand={toggleSidebarPayBand} />
      <SidebarUnoformSize open={sidebarOpenUniformSize} toggleSidebarUniformSize={toggleSidebarUniformSize} />
      <SidebarStaffStatus open={sidebarOpenStaffStatus} toggleSidebarStaffStatus={toggleSidebarStaffStatus} />
      <SidebarComplRemind open={sidebarOpenCompRemind} toggleSidebarComplRemind={toggleSidebarComplRemind} />
      <SidebarManageJobRole open={sidebarOpenManageJobRole} toggleSidebarManageJobRole={toggleSidebarManageJobRole} />
      <SidebarCrossAllocation open={sidebarOpenCrossAllocation} toggleSidebarCrossAllocation={toggleSidebarCrossAllocation} />
    </Fragment>

  )
}

export default StaffTabContent
