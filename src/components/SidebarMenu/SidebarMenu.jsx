import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import "./SidebarMenu.scss";

const SidebarMenu = () => {
  const { pathname } = useLocation();

  return (
    <Box className="sidebar-wrapper">
      <List sx={{ pb: '10px' }}>
        <Link to="/">
          <ListItem
            disablePadding
            className={
              pathname === "/"
                ? "sidebar-list-item active"
                : "sidebar-list-item"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Ana səhifə" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/popular">
          <ListItem
            disablePadding
            className={
              pathname === "/popular"
                ? "sidebar-list-item active"
                : "sidebar-list-item"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Populyar" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SidebarMenu;
