import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Stack,
} from '@mui/material'
import { Items } from './__dummy'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import StarRateIcon from '@mui/icons-material/StarRate'

type CardItemProps = {
  item: {
    image: string
    name: string
    location: string
  }
}

const CardItem = ({ item }: CardItemProps) => {
  return (
    <Card className="card">
      <IconButton className="like">
        <FavoriteBorderOutlinedIcon color="inherit" fontSize="small" />
      </IconButton>

      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent sx={{ marginBottom: '60px' }}>
        <Typography variant="body2" className="header">
          {item.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="sub_header"
        >
          {item.location}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className="footer">
        <Stack direction="row" spacing={1}>
          <Typography className="text">$10,000</Typography>
          <Typography className="sub_text" color="text.secondary">
            / night
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <StarRateIcon fontSize="small" />
          <Typography>5.0</Typography>
        </Stack>
      </CardActions>
    </Card>
  )
}

const Section = () => {
  return (
    <Box className="section">
      <Grid container spacing={3}>
        {Items.map((item) => (
          <Grid key={item.name} item xs={3} sx={{ marginBottom: '10px' }}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Section
