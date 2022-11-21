// ** React Imports
import { Fragment, useState } from 'react'
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback, Alert, Input, Label, Tooltip } from 'reactstrap'
import Avatar from '@components/avatar'
import { Info, DollarSign, Underline, Check, X, Tag, Bell, FileText } from 'react-feather'
// ** Demo Components

import SidebarRecruimentModule from './SidebarFullRecruitment'
import SidebarConfigReg from './SidebarConfigReg'
const RecruitmentTab = () => {
  const [sidebarRecruimentModule, setSidebarRecrModule] = useState(false)
  const toggleSidebarRecruitmentModule = () => setSidebarRecrModule(!sidebarRecruimentModule)

  const [sidebarConfigReg, setSidebarConfigReg] = useState(false)
  const toggleSidebarConfigRegistration = () => setSidebarConfigReg(!sidebarConfigReg)
  return (
    <Fragment>
          <Row>
      <Col sm='6' lg='4'>
      <Col sm='12'  className='mb-1'>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<DollarSign size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Registration Configuration</h6>
                      <small>Configure Registration</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarRecruitmentModule} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
         </Col>
      <Col sm='12'  className='mb-1'>
      <Card className='card-transaction'>
            <CardBody>
              <div className='transaction-item'>
                  <div className='d-flex'>
                    <Avatar className='rounded' color='light-success' icon={<FileText size={18} />} />
                    <div>
                      <h6 className='transaction-title'>Job Description</h6>
                      <small>Configure Registration</small>
                    </div>
                  </div>
                  <Button  onClick={toggleSidebarConfigRegistration} color='success btn-sm'>Edit</Button>
                </div>
            </CardBody>
          </Card>
         </Col>
         </Col>
         </Row>
         <SidebarRecruimentModule open={sidebarRecruimentModule} toggleSidebarRecruitmentModule={toggleSidebarRecruitmentModule} />
         <SidebarConfigReg open={sidebarConfigReg} toggleSidebarConfigRegistration={toggleSidebarConfigRegistration} />
    </Fragment>
  )
}

export default RecruitmentTab
