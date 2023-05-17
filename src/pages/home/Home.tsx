import { Box } from '@mui/material'
import TopBar from './components/topbar'
import Sidebar from './components/sidebar'
import Section from './components/section'

const Home = () => {
  return (
    <Box className="container">
      <TopBar />

      <Box className='content'>
        <Sidebar />

        <Section />
      </Box>
    </Box>
  )
}

export default Home
