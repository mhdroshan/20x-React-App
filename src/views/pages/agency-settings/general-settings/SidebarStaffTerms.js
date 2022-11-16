// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import 'cleave.js/dist/addons/cleave-phone.us'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
// ** Utils
  // import StaffAgrementEditor from '../'
// ** Reactstrap Imports
import { Card, CardBody, Alert, Button, Label, FormText, Input} from 'reactstrap'
import { Info } from 'react-feather'
// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'
import '@styles/react/libs/editor/editor.scss'
const SidebarStaffTerms = ({ open, toggleSidebarStaffTerms }) => {
  // ** States

  const handleSidebarClosedStaffTerms = () => {
     
  }
  const [value, setValue] = useState(EditorState.createEmpty())
  return (
    
    <Sidebar
      size='lg'
      open={open}
      style={{maxWidth:'90%', width:'45em'}}
      title='Edit Staff/Client Terms & Conditions'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebarStaffTerms={toggleSidebarStaffTerms}
      onClosed={handleSidebarClosedStaffTerms}
    > 
       
          <Alert color='primary'>
            <div className='alert-body'>
              <Info size={18} />
              <span className='ms-1'>Staff T&C will be displayed at the time of staff registration.<br/>
              Client T&C will be displayed in the client area when they log in to their web portal.<br/> Staff Agreement can be converted to PDF under staff profile management.
              </span>
            </div>
          </Alert>
        <hr/>
          <div className='mb-2'>
          <Label className='form-label' for='user-role'>
            Select Terms and Conditions type
          </Label>
          <Input type='select' id='user-role' name='user-type-agrement'>
            <option value='Staff'>Staff</option>
            <option value='Client'>Client</option>
          </Input>
        </div>
          <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
          <hr/>
          <Button type='submit' className='me-1 ' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebarStaffTerms}>
          Cancel
        </Button>
          

    </Sidebar>
  )
}

export default SidebarStaffTerms
