/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Divider,
  Grid,
  Avatar,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import UploadIcon from '@mui/icons-material/Upload'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import HailIcon from '@mui/icons-material/Hail'
import HotelIcon from '@mui/icons-material/Hotel'
import BathtubIcon from '@mui/icons-material/Bathtub'
import TableRestaurantIcon from '@mui/icons-material/TableRestaurantOutlined'
import AddTaskIcon from '@mui/icons-material/AddTaskOutlined'
import EventAvailableIcon from '@mui/icons-material/EventAvailableOutlined'
import StarIcon from '@mui/icons-material/Star'
import ShieldIcon from '@mui/icons-material/ShieldOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function TemporaryDrawer({
  open,
  setOpen,
  item,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  item: any
}) {
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <Box className="drawer">
        <IconButton className="drawer__close" onClick={toggleDrawer(false)}>
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box className="drawer__content">
          <Stack direction="row">
            <Box className="large_image">
              <Box className="large_image__text">
                <Typography>View All Photos</Typography>
              </Box>
            </Box>

            <Box className="image_container">
              <Box className="first_image" />
              <Box className="second_image" />
            </Box>
          </Stack>

          <Box className="drawer__content__section">
            <Box className="super_host">
              <HourglassTopIcon fontSize="small" />
              <Typography>Super host</Typography>
            </Box>

            <Box className="container">
              <Box className="section_one">
                <Stack direction="row" spacing={2}>
                  <Box>
                    <Typography className="section_one__header">
                      {item.name}
                    </Typography>
                    <Typography className="section_one__sub_header">
                      {item.location}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    <IconButton className="section_one__icon">
                      <UploadIcon fontSize="small" />
                    </IconButton>

                    <IconButton className="section_one__icon">
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ marginTop: '20px' }}>
                  <Stack direction="row" spacing={1}>
                    <HailIcon />
                    <Typography>6 guests</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <HotelIcon />
                    <Typography>2 bedrooms</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <HotelIcon />
                    <Typography>3 beds</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <BathtubIcon />
                    <Typography>3 baths</Typography>
                  </Stack>
                </Stack>

                <Divider className="divider" />

                <Stack
                  direction="row"
                  spacing={2}
                  className="section_one__details"
                >
                  <Box className="section_one__details__item">
                    <IconButton className="section_one__details__icon">
                      <TableRestaurantIcon />
                    </IconButton>

                    <Typography className="section_one__details__header">
                      Dedicated workspace
                    </Typography>
                    <Typography className="section_one__details__sub_header">
                      A private room with wifi that’s well-suited for working.
                    </Typography>
                  </Box>

                  <Box className="section_one__details__item">
                    <IconButton className="section_one__details__icon">
                      <AddTaskIcon />
                    </IconButton>

                    <Typography className="section_one__details__header">
                      Self check-in
                    </Typography>
                    <Typography className="section_one__details__sub_header">
                      Check yourself in with the keypad.
                    </Typography>
                  </Box>

                  <Box className="section_one__details__item">
                    <IconButton className="section_one__details__icon">
                      <EventAvailableIcon />
                    </IconButton>

                    <Typography className="section_one__details__header">
                      Free cancellation before Jul 25
                    </Typography>
                    <Typography className="section_one__details__sub_header">
                      A private room with wifi that’s well-suited for working.
                    </Typography>
                  </Box>
                </Stack>

                <Divider className="divider" />

                <Box className="section_one__about">
                  <Typography className="section_one__about__header">
                    About this space
                  </Typography>

                  <Typography className="section_one__about__text">
                    Enjoy a quiet getaway in this charming cottage renovated,
                    designed, and owned by Chip and Joanna Gaines. Originally
                    the carriage house for Hillcrest Estate, this home includes
                    one bedroom, one bath, an office nook and a private back
                    patio. This makes it the perfect getaway for a party of two,
                    or if you’re stopping through town and need a restful place
                    to retreat.
                  </Typography>

                  <Typography className="section_one__about__sub_header">
                    The space
                  </Typography>

                  <Typography className="section_one__about__text">
                    An open living, dining, and kitchen area provide ample room
                    in this cozy cottage. French double doors lead you out to
                    the back patio to enjoy your own private outdoor space. A
                    dedicated, covered parking spot for your use. The parking
                    lot is shared with Hillcrest Estate guests.
                  </Typography>

                  <Typography className="section_one__button">
                    Read more
                  </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="section_one__about">
                  <Typography className="section_one__about__header">
                    What this place offers
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                      marginTop: '30px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HailIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Kitchen
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Private patio or balcony
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Central air conditioning
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                      marginTop: '30px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HailIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Dedicated workspaces
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Wifi
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Heating
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                      marginTop: '30px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HailIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        55” 4k TV
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        1 parking space
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        width: '100%',
                        alignItem: 'center',
                        color: 'rgb(17, 17, 17)',
                      }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Security cameras
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                      marginTop: '30px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: '100%', alignItem: 'center' }}
                    >
                      <HailIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Free dryer - in unit
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: '100%', alignItem: 'center' }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Free washer - in unit
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: '100%', alignItem: 'center' }}
                    >
                      <HotelIcon />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.7,
                        }}
                      >
                        Ceiling fans
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography className="section_one__button">
                    View more
                  </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="section_one__about">
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Typography className="section_one__about__header">
                      Reviews
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: 'center' }}
                    >
                      <StarIcon fontSize="small" sx={{ color: 'black' }} />
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          fontSize: '15px',
                          opacity: 0.9,
                        }}
                      >
                        4.99 — 124 reviews
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      borderRadius: '15px',
                      padding: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.12)',
                      marginTop: '20px',
                    }}
                  >
                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>
                          Cleanliness
                        </Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '100%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            5.0
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>
                          Accuracy
                        </Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '98%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            4.9
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>
                          Communication
                        </Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '96%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            4.8
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>
                          Location
                        </Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '96%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            4.8
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>
                          Check-in
                        </Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '98%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            4.9
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: 'center', marginBottom: '20px' }}
                    >
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: '15px' }}>Value</Typography>
                      </Grid>

                      <Grid item xs={9}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              height: '10px',
                              width: '100%',
                              borderRadius: '5px',
                              background: '#f3f3f2',
                            }}
                          >
                            <Box
                              sx={{
                                height: '100%',
                                width: '84%',
                                background: '#c9315f',
                                borderRadius: '5px',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{ fontSize: '15px', marginLeft: '10px' }}
                          >
                            4.2
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Grid
                    container
                    sx={{ marginTop: '30px', marginBottom: '40px' }}
                    spacing={2}
                  >
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          borderRadius: '15px',
                          padding: '20px',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          sx={{ alignItems: 'center', marginBottom: '30px' }}
                        >
                          <Avatar
                            alt="Sharp"
                            src="https://framerusercontent.com/images/l64WTbI604jxlY6dzS0UsF0k6TU.png"
                            sx={{ width: 60, height: 60 }}
                          />

                          <Box>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '5px',
                              }}
                            >
                              Steve
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                color: 'rgba(113, 113, 113, 1)',
                              }}
                            >
                              March 2023
                            </Typography>
                          </Box>
                        </Stack>

                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#111111',
                            opacity: '0.7',
                          }}
                        >
                          Abbe's place was so wonderful and just what I needed.
                          It was the perfect escape with a great wood stove,
                          beautiful views, horses, and nearby skiing. I'm so
                          grateful.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box
                        sx={{
                          borderRadius: '15px',
                          padding: '20px',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          sx={{ alignItems: 'center', marginBottom: '30px' }}
                        >
                          <Avatar
                            alt="Sharp"
                            src="https://framerusercontent.com/images/1IzljdLWd8T9eDfla0R5LrZ9s.png"
                            sx={{ width: 60, height: 60 }}
                          />

                          <Box>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '5px',
                              }}
                            >
                              Emily
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                color: 'rgba(113, 113, 113, 1)',
                              }}
                            >
                              March 2023
                            </Typography>
                          </Box>
                        </Stack>

                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#111111',
                            opacity: '0.7',
                          }}
                        >
                          The location was very quiet and peaceful. We loved the
                          wood stove and the location was convenient, however
                          the interior was not in the best shape.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box
                        sx={{
                          borderRadius: '15px',
                          padding: '20px',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          sx={{ alignItems: 'center', marginBottom: '30px' }}
                        >
                          <Avatar
                            alt="Sharp"
                            src="https://framerusercontent.com/images/jgTKOYkhLrOCP4ZWEugNNBORbs.png"
                            sx={{ width: 60, height: 60 }}
                          />

                          <Box>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '5px',
                              }}
                            >
                              Daniel
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                color: 'rgba(113, 113, 113, 1)',
                              }}
                            >
                              March 2023
                            </Typography>
                          </Box>
                        </Stack>

                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#111111',
                            opacity: '0.7',
                          }}
                        >
                          Overall a decent stay. I appreciated having a kitchen
                          and access to firewood for the stove which heated up
                          the little cabin very effectively.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box
                        sx={{
                          borderRadius: '15px',
                          padding: '20px',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          sx={{ alignItems: 'center', marginBottom: '30px' }}
                        >
                          <Avatar
                            alt="Sharp"
                            src="https://framerusercontent.com/images/Jc9D7O4ihy2vSsSvjtWRRQPffjw.png"
                            sx={{ width: 60, height: 60 }}
                          />

                          <Box>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '5px',
                              }}
                            >
                              Jackson
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                color: 'rgba(113, 113, 113, 1)',
                              }}
                            >
                              March 2023
                            </Typography>
                          </Box>
                        </Stack>

                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#111111',
                            opacity: '0.7',
                          }}
                        >
                          Overall a decent stay. I appreciated having a kitchen
                          and access to firewood for the stove which heated up
                          the little cabin very effectively.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography className="section_one__button">
                    View more
                  </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="section_one__about">
                  <Typography className="section_one__about__header">
                    Where you'll be
                  </Typography>

                  <Box sx={{ margin: '20px 0' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{
                        borderRadius: '25px',
                        borderColor: 'transparent',
                      }}
                      aria-hidden="false"
                      tabIndex={0}
                    ></iframe>
                  </Box>

                  <Typography className="section_one__about__sub_header">
                    Laglio, Lombardia, Italy
                  </Typography>

                  <Typography className="section_one__about__text">
                    The property, given its close proximity to the refreshing
                    hillside town of Tagaytay and clear blue beaches of Nasugbu,
                    provides a quick escape from the hustle and bustle of city
                    life.
                  </Typography>

                  <Typography className="section_one__button">
                    View more
                  </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="section_one__about">
                  <Typography className="section_one__about__header">
                    Host
                  </Typography>

                  <Stack
                    direction={'row'}
                    sx={{ justifyContent: 'space-between', marginTop: '30px' }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: 'center', marginBottom: '30px' }}
                    >
                      <Avatar
                        alt="Sharp"
                        src="https://framerusercontent.com/images/BJlejSA7m05FYSEDxGymG3qB2w.jpg"
                        sx={{
                          width: 50,
                          height: 50,
                          marginRight: '20px',
                        }}
                      />

                      <Box>
                        <Typography
                          sx={{
                            color: 'rgb(17, 17, 17)',
                            fontWeight: '500',
                            marginBottom: '0px',
                            fontSize: '18px',
                          }}
                        >
                          Hosted by Brenda
                        </Typography>
                        <Typography
                          sx={{ color: 'rgb(113, 113, 113)', fontSize: '14px' }}
                        >
                          Joined in August 2014
                        </Typography>
                      </Box>
                    </Stack>

                    <Box
                      sx={{
                        border: '1px solid rgb(17, 17, 17)',
                        borderRadius: '10px',
                        height: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 30px',
                        '&:hover': {
                          border: '1px solid #c9315f',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'rgb(17, 17, 17)',
                          marginBottom: '0px',
                          fontSize: '16px',
                        }}
                      >
                        Contact Host
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ alignItems: 'center', marginBottom: '30px' }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: 'center' }}
                    >
                      <StarIcon fontSize="small" />
                      <Typography sx={{ opacity: '0.8', fontSize: '15px' }}>
                        2,635 reviews
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: 'center' }}
                    >
                      <ShieldIcon fontSize="small" />
                      <Typography sx={{ opacity: '0.8', fontSize: '15px' }}>
                        Identity verified
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: 'center' }}
                    >
                      <HourglassTopIcon fontSize="small" />
                      <Typography sx={{ opacity: '0.8', fontSize: '15px' }}>
                        Superhost
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography className="section_one__about__text">
                    As a mother of 4, living in Solana Beach for 25+ years, I
                    love to help families enjoy our beautiful area. Vacations
                    are special and we do our very best to make them affordable,
                    enjoy…
                  </Typography>

                  <Typography className="section_one__button">
                    View more
                  </Typography>
                </Box>
              </Box>

              <Box className="section_two">
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Stack direction="row" sx={{ alignItems: 'center' }}>
                    <Typography
                      sx={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginRight: '10px',
                      }}
                    >
                      $359
                    </Typography>
                    <Typography>/ night</Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: 'center' }}
                  >
                    <StarIcon fontSize="small" sx={{ color: 'black' }} />
                    <Typography
                      sx={{
                        color: 'rgb(17, 17, 17)',
                        fontSize: '15px',
                        opacity: 0.9,
                      }}
                    >
                      4.99
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: 'rgb(113, 113, 113)',
                        fontSize: '13px',
                        opacity: '0.9',
                      }}
                    >
                      Check In
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{
                        alignItems: 'center',
                        marginTop: '10px',
                        background: 'white',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: '1px solid #fff',
                        '&:hover': {
                          border: '1px solid #111111',
                        },
                      }}
                      spacing={2}
                    >
                      <CalendarTodayIcon
                        sx={{ color: '#717171' }}
                        fontSize="small"
                      />

                      <Typography sx={{ fontSize: '15px' }}>
                        6/14/2023
                      </Typography>
                    </Stack>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: 'rgb(113, 113, 113)',
                        fontSize: '13px',
                        opacity: '0.9',
                      }}
                    >
                      Check Out
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{
                        alignItems: 'center',
                        marginTop: '10px',
                        background: 'white',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: '1px solid #fff',
                        '&:hover': {
                          border: '1px solid #111111',
                        },
                      }}
                      spacing={2}
                    >
                      <CalendarTodayIcon
                        sx={{ color: '#717171' }}
                        fontSize="small"
                      />

                      <Typography sx={{ fontSize: '15px' }}>
                        6/21/2023
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Box>
                  <Typography
                    sx={{
                      color: 'rgb(113, 113, 113)',
                      fontSize: '13px',
                      opacity: '0.9',
                    }}
                  >
                    Guests
                  </Typography>

                  <Stack
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      marginTop: '10px',
                      background: 'white',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      border: '1px solid #fff',
                      justifyContent: 'space-between',
                      '&:hover': {
                        border: '1px solid #111111',
                      },
                    }}
                    spacing={2}
                  >
                    <Typography sx={{ fontSize: '15px' }}>1 guest</Typography>

                    <KeyboardArrowDownIcon
                      sx={{ color: '#717171' }}
                      fontSize="small"
                    />
                  </Stack>
                </Box>

                <Divider className="divider" />

                <Box sx={{ margin: '20px 0' }}>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: 'center' }}
                      spacing={1}
                    >
                      <Typography sx={{ fontWeight: '500', fontSize: '14px' }}>
                        6 nights
                      </Typography>
                      <ErrorOutlineIcon
                        sx={{ fontSize: '14px', color: '#717171' }}
                      />
                    </Stack>

                    <Typography
                      sx={{
                        fontWeight: '400',
                        fontSize: '15px',
                        color: 'black',
                      }}
                    >
                      $2,199
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: 'center' }}
                      spacing={1}
                    >
                      <Typography sx={{ fontWeight: '500', fontSize: '14px' }}>
                        Cleaning fee
                      </Typography>
                      <ErrorOutlineIcon
                        sx={{ fontSize: '14px', color: '#717171' }}
                      />
                    </Stack>

                    <Typography
                      sx={{
                        fontWeight: '400',
                        fontSize: '15px',
                        color: 'black',
                      }}
                    >
                      $85
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: 'center' }}
                      spacing={1}
                    >
                      <Typography sx={{ fontWeight: '500', fontSize: '14px' }}>
                        Airbnb service fee
                      </Typography>
                      <ErrorOutlineIcon
                        sx={{ fontSize: '14px', color: '#717171' }}
                      />
                    </Stack>

                    <Typography
                      sx={{
                        fontWeight: '400',
                        fontSize: '15px',
                        color: 'black',
                      }}
                    >
                      $322
                    </Typography>
                  </Stack>

                  <Divider className="divider" />

                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>
                        Total
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgb(113, 113, 113)',
                          fontSize: '13px',
                          opacity: '0.9',
                        }}
                      >
                        Before taxes
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: '400',
                        fontSize: '15px',
                        color: 'black',
                      }}
                    >
                      $2,606
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      background:
                        'linear-gradient(95.006deg, rgb(211, 59, 80) 100%, rgb(198, 47, 101) 0%)',
                      margin: '30px auto',
                      height: '30px',
                      padding: '10px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: '10px',
                      justifyContent: 'center',
                      '&:hover': {
                        background:
                          'linear-gradient(95.006deg, rgb(211, 59, 80) 0%, rgb(198, 47, 101) 100%)',
                      },
                    }}
                  >
                    <Typography sx={{ color: 'white', fontSize: '16px' }}>
                      Reserve
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}
