// ** React Imports
import { Fragment, useState } from 'react'
import Avatar from '@components/avatar'
// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip,  ModalBody, ModalHeader, Modal, InputGroup, InputGroupText  } from 'reactstrap'
import { Check, X, Shield} from 'react-feather'
import Select, { components } from 'react-select' // eslint-disable-line
import { selectThemeColors } from '@utils'
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
const neutrlVendorsOptions = [
  { value: 'RGN', label: 'RGN', isFixed: true },
  { value: 'HCA', label: 'HCA', isFixed: true },
  { value: 'SHCA', label: 'SHCA', isFixed: true }
]
const ModalNeutralVendors = () => {
  // ** States
  const [show, setShow] = useState(false)
  // ** Hooks

  return (
    <Fragment>
              <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<Shield size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Neutral Vendors</h6>
                      <small>Edit neutral vendors</small>
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
      <h1 className='text-center mb-1'>Neutral Vendors</h1>
     
      <Row tag='form' className='gy-1 gx-2 mt-75'>
      <div className='d-flex flex-row justify-content-between w-100' >
                <Label for='enableNeutral' className='form-check-label mb-50'>
                Enable Neutral Vendors
                </Label>
                <div className='form-switch form-check-success'>
                  <Input type='switch' defaultChecked id='enableNeutral' name='enableNeutral' />
                  <CustomLabel htmlFor='enableNeutral' />
                </div>
              </div>
                                 
            <div className='d-flex flex-row justify-content-between w-100' >
                <Label for='icon-primary' className='form-check-label mb-50 me-1'>
                Do you want to invoice neutral vendor clients through 20X?
                </Label>
                <div className='form-switch form-check-success'>
                  <Input type='switch' defaultChecked id='icon-primary' name='icon-primary' />
                  <CustomLabel htmlFor='icon-primary' />
                </div>
              </div>
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

export default ModalNeutralVendors
