import { Link, useLocation } from "react-router-dom";
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
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

      <Box sx={{ pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ color: 'rgba(2, 66, 137, 1)', fontSize: '20px', fontWeight: '500' }}>Qruplar</Typography>
        <Box 
          component={"span"} 
          sx={{ 
            borderRadius: '14.59px', 
            bgcolor: 'rgba(0, 32, 67, 1)', 
            padding: '1px 12px', 
            color: '#fff' 
          }}
        >
          19
        </Box>
      </Box>

      <List className="sidebar-menu-groups" sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Website Design" secondary="679 üzv" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Frontend Development" secondary="537 üzv" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Software Development" secondary="324 üzv" />
        </ListItem>
      </List>

      <Link to="/">
        <Button variant="outlined">Hamısına bax</Button>
      </Link>

      <Divider sx={{ py: 1 }} />

      <Box sx={{ pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ color: 'rgba(2, 66, 137, 1)', fontSize: '20px', fontWeight: '500' }}>Kategoriyalar</Typography>
      </Box>

      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: '12px' }} className="sidebar-menu-category">
        <Link to="/">
          <Typography sx={{ color: 'rgba(51, 51, 51, 1)', fontSize: '18px', fontWeight: '500' }}>Dizayn</Typography>
        </Link>
        <Link to="/">
          <Typography sx={{ color: 'rgba(51, 51, 51, 1)', fontSize: '18px', fontWeight: '500' }}>Texnologiya</Typography>
        </Link>
        <Link to="/">
          <Typography sx={{ color: 'rgba(51, 51, 51, 1)', fontSize: '18px', fontWeight: '500' }}>Proqramlaşdırma</Typography>
        </Link>
      </Box>
      
      <Link to="/">
        <Button variant="outlined">Hamısına bax</Button>
      </Link>

      <Divider sx={{ py: 1 }} />

      <List sx={{ pb: '10px' }}>
        <Link to="/">
          <ListItem
            disablePadding
            className="sidebar-list-item"
          >
            <ListItemButton>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Kömək" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem
            disablePadding
            className="sidebar-list-item"
          >
            <ListItemButton>
              <ListItemIcon>
                <BuildOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="App & Tools" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default SidebarMenu;