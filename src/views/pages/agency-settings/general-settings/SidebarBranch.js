// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import 'cleave.js/dist/addons/cleave-phone.us'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select' // eslint-disable-line
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input} from 'reactstrap'
import { Info } from 'react-feather'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
const SidebarBranch = ({ open, toggleSidebarTerms }) => {
  // ** States
  const agencyAgrementOptions = [
    { value: 'RGN', label: 'RGN', isFixed: true },
    { value: 'HCA', label: 'HCA', isFixed: true },
    { value: 'SHCA', label: 'SHCA', isFixed: true }
  ]
  const handleSidebarClosedTerms = () => {
     
  }
  const [value, setValue] = useState(EditorState.createEmpty())
  return (
    
    <Sidebar
      size='lg'
      style={{maxWidth:'90%', width:'70em'}}
      open={open}
      title='Edit/Add Agency Worker Agreement'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebarTerms={toggleSidebarTerms}
      onClosed={handleSidebarClosedTerms}
    > 
       
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>
              You can copy and paste your own agreement details here and save.<br/> Staff Agreement can be converted to PDF under staff profile management.
              </span>
            </div>
          </Alert>
        <hr/>
          <div className='mb-2'>
          <Label className='form-label' for='user-role'>
            Select User Type
          </Label>
          <Select
              isClearable={false}
              theme={selectThemeColors}
              defaultValue={[agencyAgrementOptions[2], agencyAgrementOptions[3]]}
              isMulti
              name='colors'
              options={agencyAgrementOptions}
              className='react-select'
              classNamePrefix='select'
            />
            <FormText color='muted'>You can select multiple job roles as applicable</FormText>
        </div>
          <Editor editorState={value} wrapperClassName="demo-wrapper" onEditorStateChange={data => setValue(data)} />
        
          <div style={{marginTop:'100px'}}>
          <Button type='submit' className='me-1 ' color='success'>
          Save
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarTerms}>
          Cancel
        </Button>
        </div>
          

    </Sidebar>
  )
}

export default SidebarBranch
