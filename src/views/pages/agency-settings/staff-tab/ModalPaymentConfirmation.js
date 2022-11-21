// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { DollarSign, Check, X} from 'react-feather'
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
const ModalCondfirmation = () => {
  // ** States
  const [show, setShow] = useState(false)
  // ** Hooks

  return (
    <Fragment>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-secondary' icon={<DollarSign size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Payment Confirmations</h6>
                      <small>Edit payment confirmation text</small>
                    </div>
                  </div>
                  <Button  onClick={() => setShow(true)} color='secondary btn-sm'>Edit</Button>
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
      <h1 className='text-center mb-1'>Add Payment Confirmations</h1>
     
      <Row tag='form' className='gy-1 gx-2 mt-75'>
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
        <Col className='text-center mt-3' xs={12}>
          <Button type='submit' className='me-1' color='primary'>
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

export default ModalCondfirmation
