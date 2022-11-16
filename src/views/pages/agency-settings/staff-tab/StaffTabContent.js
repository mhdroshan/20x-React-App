// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip } from 'reactstrap'
import Select from 'react-select' // eslint-disable-line
import JobRoleEdit from '../JobRoleEdit'
// ** Third Party Components
import { selectThemeColors } from '@utils'
import { Info, DollarSign, Underline, Check, X } from 'react-feather'
// import * as yup from 'yup'
// import { useForm, Controller } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'

import SidebarPayBand from './SidebarPayBand'
import SidebarUnoformSize from './SidebarUnoformSize'

// ** Custom Components

const expiryNoofDays = [
  {
    label: 'Choose days',
    options: [
      { value: '7', label: '7 days' },
      { value: '15', label: '15 days' },
      { value: '30', label: '30 days' },
      { value: '40', label: '45 days' },
      { value: '60', label: '60 days' }
    ]
  }
]

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

  // tooltips states
  const [tooltipOpen1, settooltipOpen1] = useState(false)
  const [tooltipOpen2, settooltipOpen2] = useState(false)
  const [tooltipOpen3, settooltipOpen3] = useState(false)
  const [tooltipOpen4, settooltipOpen4] = useState(false)
  const [tooltipOpen5, settooltipOpen5] = useState(false)


  // ** Hooks
  // const {
  //   formState: { errors }
  // } = useForm({
  //   defaultValues,
  //   resolver: yupResolver(SignupSchema)
  // })

  const [sidebarOpenPayBand, setSidebarPayBandOpen] = useState(false)
  const [sidebarOpenUniformSize, setSidebarUnifromSizeOpen] = useState(false)

  const toggleSidebarPayBand = () => setSidebarPayBandOpen(!sidebarOpenPayBand)
  const toggleSidebarUniformSize = () => setSidebarUnifromSizeOpen(!sidebarOpenUniformSize)
  return (
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
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      <Card>
      <CardHeader>
          <CardTitle tag='h4'>Payment Confirmations</CardTitle>
        </CardHeader>
      <CardBody>
      {/* <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>Set your payment confirmation here.
              </span>
            </div>
          </Alert> */}
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
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      <Card>
      <CardHeader>
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Right To Work Limit
          <Info size={20} id='ControlledExample' />
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
      <CardBody>
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
      </Col>
 
      <Col sm='6' lg='4' className='mb-1'>
        <JobRoleEdit/>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
        <Card>
        <CardHeader>
            <CardTitle className='d-flex justify-content-between align-items-center' tag='h4'>Certificates/Compliance Documents Expiry Reminder
            <Info size={20} id='expiryTooltip' style={{width:'40px'}} /></CardTitle>
            <Tooltip
        placement='left'
        isOpen={tooltipOpen2}
        target='expiryTooltip'
        toggle={() => settooltipOpen2(!tooltipOpen2)}
      >
      Expiry email alerts will be sent to staff and admins on the days set from the below dropdown.
      </Tooltip>
          </CardHeader>
        <CardBody>
            <Form>
            <Label className='form-label' for='noofdays'>
              Choose number of days:
              </Label>
              <Select
              id='noofdays'
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={expiryNoofDays[0]}
              options={expiryNoofDays}
              className='react-select'
              classNamePrefix='select'
            />
            <hr/>
            <Label className='form-check-label mt-1 mb-0'>
            Report:
              </Label>
            
            <div className='demo-inline-spacing'>
              <div className='form-check'>
                <Input type='radio' id='reportRadio1' name='reportRadio' defaultChecked />
                <Label className='form-check-label' for='reportRadio1'>
                  <small>Daily</small>
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='reportRadio' id='reportRadio2' />
                <Label className='form-check-label' for='reportRadio2'>
                <small>Weekly</small>
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='reportRadio' id='reportRadio3' />
                <Label className='form-check-label' for='reportRadio3'>
                <small>Monthly</small>
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='reportRadio' id='reportRadio4' />
                <Label className='form-check-label' for='reportRadio4'>
                <small>No report</small>
                </Label>
              </div>
            </div>
          </Form>         
        </CardBody>
        </Card>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      <Card>
      <CardHeader>
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Shift Cancellation Charges
          <Info size={20} id='cancellationTooltip' />
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
      <CardBody>
          <Input id='cancellationText' type='textarea' name='cancellationText' placeholder='enter cancellation message here' />
          <Col className='d-grid mt-2' sm='12'>
              <Button color='success'>Save</Button>
            </Col>
      </CardBody>
      </Card>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
        <Card>
        <CardHeader>
            <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Shift Visibility in Mobile App
            <Info size={20} id='shiftvisibTooltip' />
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
        <CardBody>
            <Form>
            <Label className='form-check-label mb-10'>
            Choose number of shifts to display
              </Label>
            <div className='demo-inline-spacing'>
              <div className='form-check'>
                <Input type='radio' id='stdVisaChoose1' name='stdVisaChoose' defaultChecked />
                <Label className='form-check-label' for='stdVisaChoose1'>
                  1
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChoose2' />
                <Label className='form-check-label' for='stdVisaChoose2'>
                  2
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChoose3' />
                <Label className='form-check-label' for='stdVisaChoose3'>
                  3
                </Label>
              </div>
              <div className='form-check'>
                <Input type='radio' name='stdVisaChoose' id='stdVisaChooseAll' />
                <Label className='form-check-label' for='stdVisaChooseAll'>
                  All
                </Label>
              </div>
            </div>
          </Form>         
        </CardBody>
        </Card>
      </Col>
      <Col sm='6' lg='4' className='mb-1'>
      <Card>
      <CardHeader>
          <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Profile % for staff profile activation
          <Info size={20} id='profilePercentTooltip' />
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
      <CardBody>
          <div className='mb-2'>
          <Label className='form-label' for='default-range'>
          Select profile percentage
          </Label>
          <Input type='range' name='default-range' id='default-range' />
        </div>        
      </CardBody>
      </Card>
      </Col>
    <Fragment>

      <SidebarPayBand open={sidebarOpenPayBand} toggleSidebarPayBand={toggleSidebarPayBand} />
      <SidebarUnoformSize open={sidebarOpenUniformSize} toggleSidebarUniformSize={toggleSidebarUniformSize} />
    </Fragment>

    </Row>
  )
}

export default StaffTabContent
