// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
// import { SlideDown } from 'react-slidedown'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input, UncontrolledTooltip, Form, Row, Col, Table} from 'reactstrap'
import { Info, Plus, X, Check } from 'react-feather'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
// SWITCH ICONS
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
const SidebarConfigReg = ({ open, toggleSidebarConfigRegistration }) => {
  // ** States
  const handleSidebarFullRecruitment = () => {
     
  }
  const [value, setValue] = useState(EditorState.createEmpty())
  return (
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Job Description Cofiguration'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebarConfigRegistration={toggleSidebarConfigRegistration}
      onClosed={handleSidebarFullRecruitment}
    > 
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18}   id='UnControlledExample'/>
              <span className='ms-1'>Set your Job description, Pre-Qualification Question & Interview Here
              </span>
            </div>
          </Alert>
        <div className='mb-2'>
        <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
            <div className='form-switch form-check-success'>
            <Label for='JobDescrConf' className='form-check-label mb-50'>
              Job Description Configuration
              </Label>
              <Input type='switch' defaultChecked id='JobDescrConf' name='JobDescrConf' />
                <CustomLabel htmlFor='JobDescrConf' />
              </div>
            </div>
          </div>

          <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
          <Button type='submit' className='me-1 mt-1 d-block' style={{marginLeft:'auto'}} outline color='primary'>
          Save
        </Button>
          <hr/>
          <div className='mb-2 mt-2'>
        <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
            <div className='form-switch form-check-success'>
            <Label for='preQualif' className='form-check-label mb-50'>
            Pre-qualification questions configuration
              </Label>
              <Input type='switch' defaultChecked id='preQualif' name='preQualif' />
                <CustomLabel htmlFor='preQualif' />
              </div>
            </div>
          </div>
          <div className='mb-2 mt-1'>
        <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
            <div className='form-switch form-check-success'>
            <Label for='showQuestTion' className='form-check-label mb-50'>
            Questions showing one after another
              </Label>
              <Input type='switch' defaultChecked id='showQuestTion' name='showQuestTion' />
                <CustomLabel htmlFor='showQuestTion' />
              </div>
            </div>
          </div>
          <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
          <Button type='submit' className='me-1 mt-1 d-block' style={{marginLeft:'auto'}} outline color='primary'>
          Save
        </Button>
        <hr/>
        <div className='mb-2 mt-2'>
        <div className='form-check form-check-inline' style={{paddingLeft:'0', paddingTop:'5px;'}}>
            <div className='form-switch form-check-success'>
            <Label for='restrictreg' className='form-check-label mb-50'>
            Restrict the registration flow upto pre-qualification answers
              </Label>
              <Input type='switch' defaultChecked id='restrictreg' name='restrictreg' />
                <CustomLabel htmlFor='restrictreg' />
              </div>
            </div>
          </div>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarConfigRegistration}>
          Close
        </Button>
          
    </Sidebar>
  )
}

export default SidebarConfigReg
