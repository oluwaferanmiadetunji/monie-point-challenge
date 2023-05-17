import {
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
} from '@mui/material'
import { NavItems } from './__dummy'

export default function Sidebar() {
  return (
    <List className="sidebar">
      {NavItems.map(({ text, icon }) => (
        <ListItem disablePadding className="list-item" key={text}>
          <ListItemIcon className="list-item__icon">{icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography className="list-item__text">{text}</Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
