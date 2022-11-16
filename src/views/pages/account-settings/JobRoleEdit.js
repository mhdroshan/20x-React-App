// ** Third Party Components
// import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input, Button, Row, Col, Alert } from 'reactstrap'
import Select from 'react-select' // eslint-disable-line
import { selectThemeColors } from '@utils'
import { Info } from 'react-feather'

const groupedOptions = [
    {
      label: 'User Roles',
      options: [
        { value: 'Medical Staff', label: 'Medical Staff' },
        { value: 'Non Medical Staff', label: 'Non Medical Staff' },
        { value: 'Transport', label: 'Transport' }
      ]
    }
]
const JobRoleEdit = () => {
  return (
    <Card className='card-payment'>
      <CardHeader>
        <CardTitle tag='h4'>Manage Job Role</CardTitle>
      </CardHeader>
      <CardBody>
      <Alert color='primary'>
        <div className='alert-body'>
          <Info size={15} />
          <span className='ms-1'>
          You can create your staff type here. By default, the software comes with Health Care Assistant (HCA) and Registered General Nurse (RGN). Please create any other staff type your agency employs.
          </span>
        </div>
      </Alert>
        <Form className='form' onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm='12' className='mb-2'>
              <Label className='form-label' for='position-name'>
              Position Name
              </Label>
              <Input placeholder='Eg: Health Care Assistant' id='position-name' />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='user-role-select'>
              Select User Role
              </Label>
              <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={groupedOptions[0]}
              options={groupedOptions}
              className='react-select'
              classNamePrefix='select'
            />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='position-short-form'>
              Position short form
              </Label>
              <Input type='number' placeholder='HCA' id='position-short-form' />
            </Col>
            <Col className='d-grid' sm='12'>
              <Button color='success'>Save</Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default JobRoleEdit
