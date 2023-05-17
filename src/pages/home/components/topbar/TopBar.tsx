import { useRef } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  Divider,
  IconButton,
  InputBase,
} from '@mui/material'
import AirbnbLogo from 'assets/logo.svg'
import GridViewIcon from '@mui/icons-material/GridView'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import FilterAltIcon from '@mui/icons-material/FilterAltOutlined'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import useOnScreen from 'hooks'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#111111',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `20px`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '30px',
    fontSize: '14px',
  },
}))

export default function TopBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <Box className="topbar">
      <AppBar position="static" className="appbar" elevation={0} ref={ref}>
        <Toolbar className="toolbar">
          <Box className="logo">
            <img src={AirbnbLogo} alt="Airbnb" />
          </Box>

          <Stack direction="row" spacing={5}>
            <Box className="active_link">
              <Typography className="text">Stays</Typography>
              <Divider className="divider" />
            </Box>
            <Typography className="link">Experiences</Typography>
            <Typography className="link">Online Experiences</Typography>
          </Stack>

          <Avatar
            alt="Sharp"
            src="https://framerusercontent.com/images/RkV86hKSZ17yNsuZKWylbt86ZiI.png"
            sx={{ width: 45, height: 45 }}
          />
        </Toolbar>
      </AppBar>

      <AppBar
        className={!isVisible ? 'filterBar sticky' : 'filterBar'}
        elevation={0}
      >
        <Toolbar className="toolbar">
          <Stack direction="row">
            <Box className="gridView">
              <GridViewIcon fontSize="small" />
            </Box>

            <Box className="listView">
              <AutoStoriesIcon fontSize="small" />
            </Box>
          </Stack>

          <Stack direction="row" spacing={5}>
            <Box className="location">
              <StyledInputBase value="Anywhere" />
              <Box className="wrapper">
                <KeyboardArrowDownIcon />
              </Box>
            </Box>

            <Box className="date">
              <Box className="wrapper">
                <CalendarTodayIcon fontSize="small" />
              </Box>

              <StyledInputBase
                value="June 14 - 21"
                sx={{ marginLeft: '30px' }}
              />
            </Box>

            <Box className="guests">
              <Box className="left">
                <IconButton>
                  <RemoveIcon fontSize="small" />
                </IconButton>
              </Box>

              <StyledInputBase value="4 guests" sx={{ marginLeft: '40px' }} />

              <Box className="right">
                <IconButton>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Stack>

          <IconButton className="filter">
            <FilterAltIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
