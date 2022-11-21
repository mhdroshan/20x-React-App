// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { DollarSign, Check, X, Info, Award, Percent} from 'react-feather'
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
const ProfilePercentage = () => {
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
                    <Avatar className='rounded' color='light-success' icon={<Percent size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Profile Percentage</h6>
                      <small>Set profile % limit</small>
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
      <h1 className='text-center mb-1'>Select Profile %
      <Info size={20} id='profilePercentTooltip' className='ms-2' color='#9e9e9e' />
          <Tooltip
        placement='left'
        isOpen={tooltipOpen}
        target='profilePercentTooltip'
        toggle={() => settooltipOpen(!tooltipOpen)}
      >
     This relates to the minimum percentage of candidate profile (in their registration form) required to activate them. Even if the profile percentage is less, you have the ability to force activate them from their ‘Activation & Settings’ menu
      </Tooltip>
      </h1>
      <p className='text-center'>Set your required profile % for staff profile activation here</p>
      {/* <hr/> */}
      <Row tag='form' className='gy-1 gx-2 mt-75'>
      <div class="range">
          <input type="range" class="form-range" id="profilePercRange" />
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

export default ProfilePercentage
