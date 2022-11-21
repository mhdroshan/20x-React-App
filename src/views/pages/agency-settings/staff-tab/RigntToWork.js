// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { DollarSign, Check, X, Info, Award} from 'react-feather'
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
const RigntToWork = () => {
  const [tooltipOpen1, settooltipOpen1] = useState(false)
  // ** States
  const [show, setShow] = useState(false)
  // ** Hooks

  return (
    <Fragment>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<Award size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Right To Work Limit</h6>
                      <small>Set right to work</small>
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
      <h1 className='text-center mb-2'>Right To Work Limit
      <Info size={20} id='ControlledExample' className='ms-2' jobroleTooltip color='#9e9e9e' />
      <Tooltip
        placement='left'
        isOpen={tooltipOpen1}
        target='ControlledExample'
        toggle={() => settooltipOpen1(!tooltipOpen1)}
      >
       Set your Student VISA [Right To Work Limit Config Option] here.
      </Tooltip>
      </h1>

      <Row tag='form' className='gy-1 gx-2 mt-75'>
      <div className='d-flex flex-row justify-content-between w-100 my-1' >
            <Label for='studentVisa' className='form-check-label mb-10'>
            Student VISA configuration
            </Label>
            <div className='form-switch form-check-success'>
              <Input type='switch' defaultChecked id='studentVisa' name='studentVisa' />
              <CustomLabel htmlFor='studentVisa' />
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

export default RigntToWork
