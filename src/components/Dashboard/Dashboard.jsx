import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  alpha,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";

// import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import dipnot_logo from "../../assets/dipnote-logo.svg";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  InputBase,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import "./Dashboard.scss";

const drawerWidth = 340;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...{
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  [theme.breakpoints.down("769")]: {
    width: "100%",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #ccc",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "90%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "70%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: 0,
      },
    }),
    [theme.breakpoints.down("769")]: {
      ...(open && {
        width: "100vw",
        zIndex: 2000,
      }),
    },
  },
}));

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const matches = useMediaQuery("(min-width:769px)");

  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{
            bgcolor: "#fff",
            boxShadow: `
              0px 2px 4px -1px rgba(0,0,0,0.04),
              0px 4px 5px 0px rgba(0,0,0,0.04),
              0px 1px 10px 0px rgba(0,0,0,0.04)
            `,
            height: "90px",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              p: 0,
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="#000"
              noWrap
              sx={{
                flexGrow: 1,
                display: "flex",
                px: 3,
                alignItems: "center",
                pr: !matches && 0,
              }}
            >
              <IconButton
                edge="start"
                color="#000"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "10px",
                  display: matches ? "none" : "block",
                }}
              >
                <MenuIcon
                  sx={{
                    fontSize: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </IconButton>
              <Search sx={{ height: "100%" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Axtar…"
                  sx={{ width: "100%" }}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Typography>
            <Stack direction="row" spacing={matches ? 2 : 1}>
              <IconButton
                color="#000"
                sx={{ bgcolor: "rgba(231, 231, 231, 1)" }}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton
                color="#000"
                sx={{ bgcolor: "rgba(231, 231, 231, 1)" }}
              >
                <NotificationsNoneIcon />
              </IconButton>
              <Avatar alt="Remy Sharp" src="" />
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{ height: "fit-content" }}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: matches ? "center" : "space-between",
              px: [1],
              height: "90px",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 193,
                height: 43,
              }}
              alt="The house from the offer."
              src={dipnot_logo}
            />
            <IconButton
              edge="start"
              color="#000"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "10px",
                display: matches ? "none" : "block",
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </IconButton>
          </Toolbar>
          <Divider />
          {/* <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List> */}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={8}>
                <Card sx={{ width: '100%' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <Box sx={{ px: 2, borderRadius: '19px' }}>
                    <CardMedia
                      sx={{ borderRadius: '19px' }}
                      component="img"
                      height="194"
                      image="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2023-Ford-Mustang-Dark-Horse-red-press-image-1001x565p-(1).jpg"
                      alt="Paella dish"
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ChatBubbleOutlineIcon />
                      </IconButton>
                    </Box>
                    <IconButton aria-label="share">
                      <BookmarkBorderIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={5} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                ></Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
