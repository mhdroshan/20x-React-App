// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
// ** Utils
import { selectThemeColors } from '@utils'
// import AsyncSelect from 'react-select/async'
// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input, Col, Row } from 'reactstrap'

// ** Store & Actions
// import { addUser } from '../store'
// import { useDispatch } from 'react-redux'

const defaultValues = {
  email: '',
  contact: '',
  company: '',
  fullName: '',
  username: '',
  country: null
}
// getting country names
// const [selectedDBVal, setSelectedDBVal] = useState(null)
// const handleDBChange = value => {
//   setSelectedDBVal(value)
// }
// const loadOptionsDB = () => {
//   return axios.get('https://restcountries.com/v3.1/all', { query }).then(res => {
//     return res.data
//   })
// }
// const handleDBInputChange = newValue => {
//   setQuery(newValue)
// }

const countryOptions = [
  { label: 'Australia', value: 'Australia' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Belarus', value: 'Belarus' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Canada', value: 'Canada' },
  { label: 'China', value: 'China' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'India', value: 'India' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Japan', value: 'Japan' },
  { label: 'Korea', value: 'Korea' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Russia', value: 'Russia' },
  { label: 'South', value: 'South' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'United States', value: 'United States' }
]

// const checkIsValid = data => {
//   return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
// }

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  // const [data, setData] = useState(null)
  // const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

  // ** Store Vars
  // const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    // setError,
    // handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  // const onSubmit = data => {
  //   setData(data)
  //   if (checkIsValid(data)) {
  //     toggleSidebar()
  //     dispatch(
  //       addUser({
  //         role,
  //         avatar: '',
  //         status: 'active',
  //         email: data.email,
  //         currentPlan: plan,
  //         billing: 'auto debit',
  //         company: data.company,
  //         contact: data.contact,
  //         fullName: data.fullName,
  //         username: data.username,
  //         country: data.country.value
  //       })
  //     )
  //   } else {
  //     for (const key in data) {
  //       if (data[key] === null) {
  //         setError('country', {
  //           type: 'manual'
  //         })
  //       }
  //       if (data[key] !== null && data[key].length === 0) {
  //         setError(key, {
  //           type: 'manual'
  //         })
  //       }
  //     }
  //   }
  // }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    setRole('subscriber')
    // setPlan('basic')
  }
  const [avatar, setAvatar] = useState(require('@src/assets/images/avatars/avatar-blank.png').default)
  const [favicon, setFavicon] = useState(require('@src/assets/images/avatars/avatar-blank.png').default)
  
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  const onChangeFavicon = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setFavicon(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  const handleImgReset = () => {
    setAvatar(require('@src/assets/images/avatars/avatar-blank.png').default)
  }
  const handleFavIconReset = () => {
    setFavicon(require('@src/assets/images/avatars/avatar-blank.png').default)
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Edit Account Info'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
            <div className='d-flex mt-2'>
              <div className='me-25'>
                <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100' />
              </div>
              <div className='d-flex align-items-end mt-75 ms-1'>
                <div>
                  <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                    Upload
                    <Input type='file' onChange={onChange} hidden accept='image/*' />
                  </Button>
                  <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                    Reset
                  </Button>
                  <br/>
                  <FormText color='warning'>Allowed JPG, GIF or PNG. Max size of 800kB</FormText>
                </div>
              </div>
            </div>
            <div className='d-flex mt-3 mb-3'>
              <div className='me-25 d-flex' style={{alignItems:"center"}}>
                <img className=' me-50' src={favicon} alt='Generic placeholder image' style={{borderRadius:"100px"}} height='50' width='50' />
              </div>
              <div className='d-flex align-items-end mt-75 ms-1'>
                <div>
                  <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                    Upload favicon
                    <Input type='file' onChange={onChangeFavicon} hidden accept='image/*' />
                  </Button>
                  <Button className='mb-75' color='secondary' size='sm' outline onClick={handleFavIconReset}>
                    Reset
                  </Button>
                  <br/>
                  <FormText color='warning'>Allowed JPG, GIF or PNG. Max size of 500kB</FormText>
                  
                </div>
              </div>
            </div>
            <hr/>
      {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
      <Form onSubmit=''>
    
        <div className='mb-1'>
          <Label className='form-label' for='agencyName'>
          Agency Name<span className='text-danger'>*</span>
          </Label>
          <Controller
            name='agencyName'
            control={control}
            render={({ field }) => (
              <Input id='agencyName' placeholder='Eg. ' {...field} />
            )}
          />
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='domainName'>
          Domain Name <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='domainName'
            control={control}
            render={({ field }) => (
              <Input id='domainName' placeholder='www.example.com '  {...field} />
              // {errors && errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            )}
          />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='userEmail'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                type='email'
                id='userEmail'
                placeholder='john.doe@example.com'
                invalid={errors.email && true}
                {...field}
              />
            )}
          />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='phNumber'>
              Phone Number
            </Label>
            <Cleave
              id='phNumber'
              name='phNumber'
              className='form-control'
              placeholder='1 234 567 8900'
              options={{ phone: true, phoneRegionCode: 'US' }}
            />
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='supNumber'>
        Support Number
            </Label>
            <Cleave
              id='supNumber'
              name='supNumber'
              className='form-control'
              placeholder='1 234 567 8900'
              options={{ phone: true, phoneRegionCode: 'US' }}
            />
          <FormText color='muted'>customer support number</FormText>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='busName'>
          Business Name <span className='text-danger'></span>
          </Label>
          <Controller
            name='busName'
            control={control}
            render={({ field }) => (
              <Input id='busName' placeholder='eg. 20X'  {...field} />
              // {errors && errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            )}
          />
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='postCode'>
        Post Code
          </Label>
          <Input id='postCode' name='postCode' placeholder='123 456' />
        </div>
        <div className='mb-1'>
        <Label className='form-label' for='address'>
            Address
          </Label>
          <Input id='address' type='textarea' name='address' placeholder='12, Business Park' />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='townOrcity'>
          Town/City <span className='text-danger'>*</span>
          </Label>
              <Input id='townOrcity' name='townOrcity' placeholder='London' />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='district'>
          District <span className='text-danger'>*</span>
          </Label>
              <Input id='district' name='district' placeholder='California' />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='county'>
          County 
          </Label>
              <Input id='county' name='county' placeholder='county name' />
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='country'>
            Country <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='country'
            control={control}
            render={({ field }) => (
              // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
              <Select
                isClearable={false}
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                className={classnames('react-select')}
                {...field}
              />
            //   <AsyncSelect
            //   defaultOptions
            //   isClearable={false}
            //   value={selectedDBVal}
            //   name='db-react-select'
            //   className='react-select'
            //   classNamePrefix='select'
            //   onChange={handleDBChange}
            //   theme={selectThemeColors}
            //   loadOptions={loadOptionsDB}
            //   onInputChange={handleDBInputChange}
            // />
            )}
          />
        </div>

        {/* <div className='mb-1'>
          <Label className='form-label' for='contact'>
            Contact <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='contact'
            control={control}
            render={({ field }) => (
              <Input id='contact' placeholder='(397) 294-5153' invalid={errors.contact && true} {...field} />
            )}
          />
        </div> */}
        {/* <div className='mb-1'>
          <Label className='form-label' for='company'>
            Company <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='company'
            control={control}
            render={({ field }) => (
              <Input id='company' placeholder='Company Pvt Ltd' invalid={errors.company && true} {...field} />
            )}
          />
        </div> */}
     
        <div className='mb-1'>
          <Label className='form-label' for='user-role'>
            User Role
          </Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option>
            <option value='admin'>Admin</option>
          </Input>
        </div>
        {/* <div className='mb-1' value={plan} onChange={e => setPlan(e.target.value)}>
          <Label className='form-label' for='select-plan'>
            Select Plan
          </Label>
          <Input type='select' id='select-plan' name='select-plan'>
            <option value='basic'>Basic</option>
            <option value='enterprise'>Enterprise</option>
            <option value='company'>Company</option>
            <option value='team'>Team</option>
          </Input>
        </div> */}
        <Button type='submit' className='me-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
