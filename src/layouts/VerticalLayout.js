// ** React Imports
import { Outlet } from 'react-router-dom'

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Menu Items Array
import navigation from '@src/navigation/vertical'

// const CustomFooter = () => {
//   return <p style={{textAlign:"center"}} className='mb-0'>20X.io 2022</p>
// }
const VerticalLayout = props => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  return (
    <Layout menuData={navigation} footer='COPYRIGHT © 2022 20X.io , All rights Reserved' {...props}>
      <Outlet />
    </Layout>
  )
}

export default VerticalLayout
