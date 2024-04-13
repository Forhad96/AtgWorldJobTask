import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div className='font-ibm-plex'>
      <Navbar />
      <div className='min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
