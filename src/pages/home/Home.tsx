import { Box } from '@mui/material'
import TopBar from './components/topbar'
import Sidebar from './components/sidebar'

const Home = () => {
  return (
    <Box className="container">
      <TopBar />

      <Box>
        <Sidebar />
      </Box>
    </Box>
  )
}

export default Home
