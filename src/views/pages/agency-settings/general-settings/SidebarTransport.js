// ** React Import
// import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import 'cleave.js/dist/addons/cleave-phone.us'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select' // eslint-disable-line
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, InputGroup, InputGroupText} from 'reactstrap'
import { Info } from 'react-feather'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
const transportTypeOptions = [
  { value: 'free', label: 'Free transport', isFixed: true },
  { value: 'fixed', label: 'Fixed rate', isFixed: true },
  { value: 'milage', label: 'Milage rate', isFixed: true }
]
const cutoffTimeOptions = [
  { value: '0', label: 'No cut-off time', isFixed: true },
  { value: '2', label: '2 hours', isFixed: true },
  { value: '5', label: '5 hours', isFixed: true },
  { value: '10', label: '10 hours', isFixed: true }
]
const SidebarTransport = ({ open, toggleSidebarTransport }) => {
  const handleSidebarTransport = () => {
     
  }
  return (
    
    <Sidebar
      size='lg'
      style={{maxWidth:'90%', width:'45em'}}
      open={open}
      title='Edit Transport details'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebarTransport={toggleSidebarTransport}
      onClosed={handleSidebarTransport}
    > 
       
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>
              Configure the transport settings here
              </span>
            </div>
          </Alert>
        <hr/>
        <div className='mb-2'>
                <Label className='form-label' for='transpChargetype'>
                Transport charge type
                </Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  defaultValue={[transportTypeOptions[0]]}
                
                  name='colors'
                  options={transportTypeOptions}
                  className='react-select'
                  classNamePrefix='select'
                />
              </div>
              <div className='mb-2'>
                <Label className='form-label' for='cancellCutoffTime'>
                Cancellation cut-off time
                </Label>
                {/* <Input type='select' id='cancellCutoffTime' name='cancellCutoffTime'>
                  <option value='0'>No Cut-off time</option>
                  <option value='5'>5 hrs</option>
                  <option value='2'>2 hrs</option>
                </Input> */}
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  defaultValue={[cutoffTimeOptions[0]]}
                  name='colors'
                  options={cutoffTimeOptions}
                  className='react-select'
                  classNamePrefix='select'
                />
              </div>
              <div className='mb-1'>
          <Label className='form-label' for='transRate'>
          Transport rate 
          </Label>
          <InputGroup className='mb-2'>
          <InputGroupText>$</InputGroupText>
        <Input placeholder='enter only numbers' type='number' />
      </InputGroup>
              {/* <Input id='transRate' type='number' name='transRate' placeholder='45' /> */}
              
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='transportNumber'>
        Transport Number
            </Label>
            <Input id='domainName' type='numebr' placeholder='12345 67780' />
        </div>
          <hr/>
          <Button type='submit' className='me-1 ' color='success'>
          Save
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarTransport}>
          Cancel
        </Button>
    </Sidebar>
  )
}

export default SidebarTransport
