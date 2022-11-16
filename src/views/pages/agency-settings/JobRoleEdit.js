// ** Third Party Components
// import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input, Button, Row, Col, Alert, Tooltip } from 'reactstrap'
import Select from 'react-select' // eslint-disable-line
import { selectThemeColors } from '@utils'
import { Info } from 'react-feather'
import { Fragment, useState } from 'react'

const groupedOptions = [
    {
      label: 'Sector Names',
      options: [
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Industrial', label: 'Industrial' },
        { value: 'Education', label: 'Education' },
        { value: 'Agriculture', label: 'Agriculture' }
      ]
    }
]
const JobRoleEdit = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  return (
    <Card className='card-payment'>
      <CardHeader>
        <CardTitle className='w-100 d-flex justify-content-between' tag='h4'>Manage Job Role
        <Info size={20} id='ControlledExample' />
        </CardTitle>
      </CardHeader>
      <CardBody>
      {/* <Alert color='primary'>
        <div className='alert-body'>
          <Info size={15} />
          <span className='ms-1'>
          You can create your staff type here. By default, the software comes with Health Care Assistant (HCA) and Registered General Nurse (RGN). Please create any other staff type your agency employs.
          </span>
        </div>
      </Alert> */}
           <Tooltip
        placement='left'
        isOpen={tooltipOpen}
        target='ControlledExample'
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
       You can create your staff type here. By default, the software comes with Health Care Assistant (HCA) and Registered General Nurse (RGN). Please create any other staff type your agency employs.
      </Tooltip>
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
              Select a sector
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
