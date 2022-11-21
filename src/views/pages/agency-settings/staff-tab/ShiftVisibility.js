// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { DollarSign, Check, X, Info, Award, Percent, Eye} from 'react-feather'
// ** Third Party Components
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
const ShiftVisibility = () => {
  const [tooltipOpen, settooltipOpen] = useState(false)
  // ** States
  const [show, setShow] = useState(false)
  // ** Hooks

  return (
    <Fragment>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<Eye size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Shift Visibility</h6>
                      <small>Edit Shift Visibility in Mobile App</small>
                    </div>
                  </div>
                  <Button  onClick={() => setShow(true)} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
    <Modal
    isOpen={show}
    toggle={() => setShow(!show)}
    className='modal-dialog-centered'
  >
    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
    <ModalBody className='px-sm-5 mx-50 pb-5'>
      <h1 className='text-center mb-1'>Set Shift Visibility in Mobile App
      <Info size={20} id='profilePercentTooltip' className='ms-2' color='#9e9e9e' />
          <Tooltip
        placement='left'
        isOpen={tooltipOpen}
        target='profilePercentTooltip'
        toggle={() => settooltipOpen(!tooltipOpen)}
      >
           Configuration of Student visa staff for their shift visibility in Upcoming and Completed shifts.
      </Tooltip>
      </h1>
      <p className='text-center'>Set your required profile percentage for staff profile activation here</p>
      <hr/>
      <Row tag='form' className='gy-1 gx-2 mt-75'>
            <Label className='form-check-label mb-10'>
            Choose number of shifts to display
              </Label>
            <div className='demo-inline-spacing'>
              <div className='form-check my-1 me-2'>
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

        <Col className='text-center mt-3' xs={12}>
          <Button type='submit' className='me-1' color='success'>
            Save
          </Button>
          <Button
            color='secondary'
            outline
            onClick={() => {
              setShow(!show)
            }}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </ModalBody>
  </Modal>
    </Fragment>
  )
}

export default ShiftVisibility
