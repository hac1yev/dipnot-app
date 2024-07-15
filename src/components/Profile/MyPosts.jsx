import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const MyPosts = () => {
  return (
    <Box sx={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
      <Grid item>
        <Card
          sx={{
            width: "100%",
            background: 'rgba(4, 118, 168, 0.03)'
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                Ə
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <div style={{ display: 'flex', gap: '5px' }}>
                <span>Əli Cəfərli</span>
                {`>`}
                <span style={{ color: '#999' }}>Web Dizayn</span>
              </div>
            }
            subheader="01.04.2024"
          />
          <Link to="/posts/37264"  className="post-link">
            <CardContent>
              <Typography variant="h6">
                Top GitHub repositories
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along with
                the mussels, if you like.
              </Typography>
            </CardContent>
            <Box sx={{ px: 2, borderRadius: "19px" }}>
              <CardMedia
                sx={{ borderRadius: "19px" }}
                component="img"
                height="400"
                image="https://avatars.githubusercontent.com/u/99089581?v=4"
                alt="Paella dish"
              />
            </Box>
          </Link>
          <CardActions
            disableSpacing
            className="space-between"
            sx={{ mt: 3 }}
          >
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
      <Grid item>
        <Card
          sx={{
            width: "100%",
            background: 'rgba(4, 118, 168, 0.03)'
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                Ə
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <div style={{ display: 'flex', gap: '5px' }}>
                <span>Əli Cəfərli</span>
                {`>`}
                <span style={{ color: '#999' }}>Web Dizayn</span>
              </div>
            }
            subheader="01.04.2024"
          />
          <Link to="/posts/37264"  className="post-link">
            <CardContent>
              <Typography variant="h6">
                Top GitHub repositories
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along with
                the mussels, if you like.
              </Typography>
            </CardContent>
            <Box sx={{ px: 2, borderRadius: "19px" }}>
              <CardMedia
                sx={{ borderRadius: "19px" }}
                component="img"
                height="194"
                image="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2023-Ford-Mustang-Dark-Horse-red-press-image-1001x565p-(1).jpg"
                alt="Paella dish"
              />
            </Box>
          </Link>
          <CardActions
            disableSpacing
            className="space-between"
            sx={{ mt: 3 }}
          >
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
    </Box>
  );
};

export default MyPosts;
