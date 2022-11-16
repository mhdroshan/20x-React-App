// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Third Party Components
// import Select from 'react-select'
// import Cleave from 'cleave.js/react'
// import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'
import Sidebar from './Sidebar'
import SidebarBranch from './SidebarBranch'
import SidebarStaffTerms from './SidebarStaffTerms'
import SidebarBranchManager from './SidebarBranchManager'
import { Edit, User,  Heart, BookOpen, Globe, Check, X, Layers, Server } from 'react-feather'
import Select, { components } from 'react-select' // eslint-disable-line
// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, FormText } from 'reactstrap'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Demo Components
import DeleteAccount from '../DeleteAccount'


// const timeZoneOptions = [
//   { value: '(GMT-12:00) International Date Line West', label: '(GMT-12:00) International Date Line West' },
//   { value: '(GMT-11:00) Midway Island, Samoa', label: '(GMT-11:00) Midway Island, Samoa' },
//   { value: '(GMT-10:00) Hawaii', label: '(GMT-10:00) Hawaii' },
//   { value: '(GMT-09:00) Alaska', label: '(GMT-09:00) Alaska' },
//   { value: '(GMT-08:00) Pacific Time (US & Canada)', label: '(GMT-08:00) Pacific Time (US & Canada)' },
//   { value: '(GMT-08:00) Tijuana, Baja California', label: '(GMT-08:00) Tijuana, Baja California' },
//   { value: '(GMT-07:00) Arizona', label: '(GMT-07:00) Arizona' },
//   { value: '(GMT-07:00) Chihuahua, La Paz, Mazatlan', label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan' },
//   { value: '(GMT-07:00) Mountain Time (US & Canada)', label: '(GMT-07:00) Mountain Time (US & Canada)' },
//   { value: '(GMT-06:00) Central America', label: '(GMT-06:00) Central America' },
//   { value: '(GMT-06:00) Central Time (US & Canada)', label: '(GMT-06:00) Central Time (US & Canada)' },
//   {
//     value: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
//     label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
//   },
//   { value: '(GMT-06:00) Saskatchewan', label: '(GMT-06:00) Saskatchewan' },
//   { value: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco', label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco' },
//   { value: '(GMT-05:00) Eastern Time (US & Canada)', label: '(GMT-05:00) Eastern Time (US & Canada)' },
//   { value: '(GMT-05:00) Indiana (East)', label: '(GMT-05:00) Indiana (East)' },
//   { value: '(GMT-04:00) Atlantic Time (Canada)', label: '(GMT-04:00) Atlantic Time (Canada)' },
//   { value: '(GMT-04:00) Caracas, La Paz', label: '(GMT-04:00) Caracas, La Paz' },
//   { value: '(GMT-04:00) Manaus', label: '(GMT-04:00) Manaus' },
//   { value: '(GMT-04:00) Santiago', label: '(GMT-04:00) Santiago' },
//   { value: '(GMT-03:30) Newfoundland', label: '(GMT-03:30) Newfoundland' }
// ]

// const sectorOptions = [
//   {
//     label: 'Sectors',
//     options: [
//       {
//         value: 'Health care',
//         label: 'Health care',
//         icon: Heart
//       },
//       {
//         value: 'Education',
//         label: 'Education',
//         icon: BookOpen
//       },
//       {
//         value: 'Industrial',
//         label: 'Industrial',
//         icon: Globe
//       }
//     ]
//   }
// ]
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
const neutrlVendorsOptions = [
  { value: 'RGN', label: 'RGN', isFixed: true },
  { value: 'HCA', label: 'HCA', isFixed: true },
  { value: 'SHCA', label: 'SHCA', isFixed: true }
]
const sectorsOption = [
  { value: 'Hospital', label: 'Hospital', isFixed: true },
  { value: 'Education', label: 'Education', isFixed: true },
  { value: 'Industrial', label: 'Industrial', isFixed: true }
]
const AccountTabs = ({ }) => {
  // ** Hooks
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarOpenTerms, setSidebarOpenTerms] = useState(false)
  const [sidebarOpenStaffTerms, setSidebarOpenStaffTerms] = useState(false)
  const [sidebarOpenBranchManager, setSidebarBranchManager] = useState(false)


  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleSidebarTerms = () => setSidebarOpenTerms(!sidebarOpenTerms)
  const toggleSidebarStaffTerms = () => setSidebarOpenStaffTerms(!sidebarOpenStaffTerms)
  const toggleSidebarBranchManager = () => setSidebarBranchManager(!sidebarOpenBranchManager)
  // change sector icons
  const OptionComponent = ({ data, ...props }) => {
    const Icon = data.icon
  
    return (
      <components.Option {...props}>
        <Icon className='me-50' size={14} />
        {data.label}
      </components.Option>
    )
  }
  return (
    <Fragment>
      <Row>
      <Col lg='4' sm='6'>
        
      <Col lg='12' sm='12'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<User size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Account Info</h6>
                      <small>Edit your account info</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebar} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg='12' sm='12'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Layers size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Staff agreement</h6>
                      <small>Edit/Add agency agreement</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarTerms}  color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
        </Col>


      <Col lg='12' sm='12'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<Layers size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Staff and Client T&C</h6>
                      <small>Edit/Add T&C</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarStaffTerms} color='secondary btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg='12' sm='12'>
        <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<Server size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Branch Manager</h6>
                      <small>Edit/Add Branch Manager</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarBranchManager} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
        </Col>
      </Col>

      {/* <Col lg='6' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Edit your account info'
            icon={<User size={20}  />}
            renderStats={<h3 className='fw-bolder mb-75'>Account Info</h3>}
          />
        </Col>
        <Col lg='6' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Edit the agency staff agreement text'
            icon={<Edit size={20}  />}
            renderStats={<h3 onClick={toggleSidebarTerms}  className='fw-bolder mb-75'>Agency Staff agreement</h3>}
          />
        </Col> */}
        {/* <Col lg='6' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Edit the Staff and Client Terms & Conditions'
            icon={<Edit size={20} onClick={toggleSidebarStaffTerms}  />}
            renderStats={<h3 className='fw-bolder mb-75'>Staff/Client Terms & Conditions</h3>}
          />
        </Col> */}

        <Col lg='4' sm='6'>
          <Card>
          <CardHeader>
            <CardTitle className='d-flex flex-row justify-content-between w-100' tag='h4'>Transport
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='TransportSettings' name='TransportSettings' />
                <CustomLabel htmlFor='TransportSettings' />
              </div>
                </CardTitle>

          </CardHeader>
            <CardBody style={{paddingBottom:'15px'}}>
              
              <div className='mb-2'>
                <Label className='form-label' for='transpChargetype'>
                Transport charge type
                </Label>
                <Input type='select' id='transpChargetype' name='transpChargetype'>
                  <option value='free'>Free transport</option>
                  <option value='fixed'>Fixed rate</option>
                  <option value='milage'>Milage rate</option>
                </Input>
              </div>
        <div className='mb-1'>
          <Label className='form-label' for='transRate'>
          Transport rate 
          </Label>
              <Input id='transRate' name='transRate' placeholder='45' />
              <FormText color='warning'>Enter only numbers</FormText>
        </div>
        <div className='mb-2'>
                <Label className='form-label' for='cancellCutoffTime'>
                Cancellation cut-off time
                </Label>
                <Input type='select' id='cancellCutoffTime' name='cancellCutoffTime'>
                  <option value='0'>No Cut-off time</option>
                  <option value='5'>5 hrs</option>
                  <option value='2'>2 hrs</option>
                </Input>
              </div>
              <div className='mb-1'>
        <Label className='form-label' for='transportNumber'>
        Transport Number
            </Label>
            <Input id='domainName' type='numebr' placeholder='12345 67780' />
        </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' sm='6'>
          <Card>
          <CardHeader>
            <CardTitle className='d-flex flex-row justify-content-between w-100' tag='h4'>Neutral Vendors 
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='NeutrlVendr' name='NeutrlVendr' />
                <CustomLabel htmlFor='NeutrlVendr' />
              </div>
                </CardTitle>
          </CardHeader>
            <CardBody style={{paddingTop:"15px"}}>
                              
            <div className='d-flex flex-row justify-content-between w-100' >
                <Label for='icon-primary' className='form-check-label mb-50'>
                Do you want to invoice neutral vendor clients through 20X?
                </Label>
                <div className='form-switch form-check-secondary'>
                  <Input type='switch' defaultChecked id='icon-primary' name='icon-primary' />
                  <CustomLabel htmlFor='icon-primary' />
                </div>
              </div>
              <br/>
              <Label className='form-label'>Choose user types to add Neutral Vendors</Label>
              <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={[neutrlVendorsOptions[2], neutrlVendorsOptions[3]]}
              isMulti
              name='colors'
              options={neutrlVendorsOptions}
              className='react-select'
              classNamePrefix='select'
            />
            </CardBody>
          </Card>
          <Col lg='12' sm='12'>
          <Card>
          <CardHeader>
            <CardTitle className='d-flex flex-row justify-content-between w-100' tag='h4'>Sector Manager
                </CardTitle>
          </CardHeader>
            <CardBody className='mt-1'>
            <Label className='form-label'>Select your sectors</Label>
              <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={[sectorsOption[1], sectorsOption[2]]}
              isMulti
              name='colors'
              options={sectorsOption}
              className='react-select'
              classNamePrefix='select'
            />
            {/* <UncontrolledButtonDropdown className='w-100'>
        <DropdownToggle color='danger' caret>
          Change Sector
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag='option'>Health care</DropdownItem>
          <DropdownItem  tag='option'>Education</DropdownItem>
          <DropdownItem  tag='option'>Industrial</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> */}
              {/* <Label className='form-label'>Change Sector</Label> */}
                  {/* <Select
                    options={sectorOptions}
                    className='react-select'
                    classNamePrefix='select'
                    components={{
                      Option: OptionComponent
                    }}
                  /> */}
            </CardBody>
          </Card>
        </Col>
       
        </Col>
              
          {/* <Card>
          <CardHeader className='border-bottom'>
            <CardTitle tag='h4'>Account Info</CardTitle>
          </CardHeader>
          <CardBody className='py-2 my-25'>
     
          </CardBody>
        </Card> */}
      
      </Row>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SidebarBranch open={sidebarOpenTerms} toggleSidebarTerms={toggleSidebarTerms} />
      <SidebarStaffTerms open={sidebarOpenStaffTerms} toggleSidebarStaffTerms={toggleSidebarStaffTerms} />
      <SidebarBranchManager open={sidebarOpenBranchManager} toggleSidebarBranchManager={toggleSidebarBranchManager} />
      {/* <DeleteAccount /> */}
    </Fragment>
  )
}

export default AccountTabs
