// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Select from 'react-select' // eslint-disable-line
import { selectThemeColors } from '@utils'
// import { SlideDown } from 'react-slidedown'
// import { selectThemeColors } from '@utils'
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
const SidebarComplRemind = ({ open, toggleSidebarComplRemind }) => {
  // ** States
  const [weeklyText, setWeekyDate] = useState(false)
  const toggleweeklyDate = () => setWeekyDate(!weeklyText)
  const handleSidebarComplRemind = () => {
     
  }

  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Staff Compliance Reminder'
      headerClassName='mb-1'
      contentClassName='pt-0'
     
      toggleSidebarComplRemind={toggleSidebarComplRemind}
      onClosed={handleSidebarComplRemind}
    > 

          <Alert color='warning'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>Expiry email alerts will be sent to staff and admins on the days set from the below dropdown.
              </span>
            </div>
          </Alert>
        <hr/>
        <Row>
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
            <Label className='form-check-label mt-1 mb-0'>
            <small>Report:</small>
              </Label>
            
            <div className='demo-inline-spacing'>
              <div className='form-check my-1'>
                <Input type='radio' id='reportRadio1' name='reportRadio' defaultChecked />
                <Label className='form-check-label' for='reportRadio1'>
                  <small>Daily</small>
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio'  onClick={toggleweeklyDate} name='reportRadio' id='reportRadio2' />
                <Label className='form-check-label' for='reportRadio2'>
                <small>Weekly</small>
                {/* <Input id='weeklyDayset'  type='textarea' name='weeklyDayset' placeholder='enter cancellation message here' /> */}
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio' name='reportRadio' id='reportRadio3' />
                <Label className='form-check-label' for='reportRadio3'>
                <small>Monthly</small>
                </Label>
              </div>
              <div className='form-check my-1'>
                <Input type='radio' name='reportRadio' id='reportRadio4' />
                <Label className='form-check-label' for='reportRadio4'>
                <small>No report</small>
                </Label>
              </div>
            </div>
        </Form>
       
        
        </Row>
          <hr/>
          <Button type='submit' className='me-1 ' color='success'>
          Save
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarComplRemind}>
          Close
        </Button>
          

    </Sidebar>
  )
}

export default SidebarComplRemind
