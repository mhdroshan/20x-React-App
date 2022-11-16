// ** React Import
import { useState } from 'react'
import Repeater from '@components/repeater'
// ** Custom Components
import Sidebar from '@components/sidebar'
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, Form, Row, Col} from 'reactstrap'
import { Info, Plus, X } from 'react-feather'
import { SlideDown } from 'react-slidedown'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
import Tablebranches from './TableBranches'
const SidebarBranchManager = ({ open, toggleSidebarBranchManager }) => {
  // ** States
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    const slideDownWrapper = e.target.closest('.react-slidedown'),
      form = e.target.closest('form')
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
  }
  const handleSidebarClosedStaffTerms = () => {
     
  }
  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'55em'}}
      title='Edit Branch Manager'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebarBranchManager={toggleSidebarBranchManager}
      onClosed={handleSidebarClosedStaffTerms}
    > 
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>You can create your branches under your agency here.
              </span>
            </div>
          </Alert>
        <hr/>
        <div className='mb-1'>
          <Label className='form-label' for='branchManager'>
          Branch Name
          </Label>
              <Input id='branchManager' name='branchManager' placeholder='London' />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='postCode'>
          Post Code <span className='text-danger'>*</span>
          </Label>
              <Input id='postCode' name='postCode' placeholder='123 456' />
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='address'>
            Address
          </Label>
          <Input id='address' type='textarea' name='address' placeholder='12, Business Park' />
        </div>
        <hr/>
        <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>Add towns covered by this Branch here
              </span>
            </div>
          </Alert>
        <Repeater count={count}>
          {i => {
            const Tag = i === 0 ? 'div' : SlideDown
            return (
              <Tag key={i}>
                <Form>
                  <Row className='justify-content-between align-items-center'>
                    <Col md={8} className='mb-md-0 mb-1'>
                      <Label className='form-label' for={`animation-item-name-${i}`}>
                        Town name
                      </Label>
                      <Input type='text' id={`animation-item-name-${i}`} placeholder='eg: Yeovil' />
                    </Col>
                 
                    
                    <Col md={2}>
                      <Button color='danger' className='text-nowrap px-1 mt-2' size='sm' onClick={deleteForm} outline>
                        <X size={14} className='me-50' />
                        <span>Delete</span>
                      </Button>
                    </Col>
                   
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                </Form>
              </Tag>
            )
          }}
        </Repeater>

        <Button className='btn-icon' color='primary'  size='sm' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ms-25'>Add New</span>
        </Button>
        <hr/>
        <Tablebranches />
         
          <hr/>
          <Button type='submit' className='me-1 ' color='success'>
          Save
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarBranchManager}>
          Cancel
        </Button>
          

    </Sidebar>
  )
}

export default SidebarBranchManager
