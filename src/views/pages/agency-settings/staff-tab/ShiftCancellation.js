// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { Check, X, Info, AlertOctagon, Eye} from 'react-feather'
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
const ShiftCancellation = () => {
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
                    <Avatar className='rounded' color='light-success' icon={<AlertOctagon size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Shift Cancellation</h6>
                      <small>Edit shift cancellation charges</small>
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
      <h1 className='text-center mb-1'>Edit Shift Cancellation Charges
      <Info size={20} id='profilePercentTooltip' className='ms-2' color='#9e9e9e' />
          <Tooltip
        placement='left'
        isOpen={tooltipOpen}
        target='profilePercentTooltip'
        toggle={() => settooltipOpen(!tooltipOpen)}
      >
           In order to discourage staff from last minute cancellations and no-shows, the mobile app will flag a warning message with cancellation charge if they try to cancel a booked and confirmed shift. Please change the text and the amount as required.
      </Tooltip>
      </h1>
      {/* <p className='text-center'>Edit the shift cancellation charges text here</p> */}

      <Row tag='form' className='gy-1 gx-2 mt-75'>
      <Input id='cancellationText' type='textarea' name='cancellationText' placeholder='enter cancellation message here' />

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

export default ShiftCancellation
