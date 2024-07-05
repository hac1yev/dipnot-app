import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Posts = () => {
  return (
    <Grid item xs={12} md={7} lg={8}>
      <Card
        sx={{
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(219, 244, 255, 0.09) 2.55%, #FFFFFF 100%)",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              S
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
        <Box sx={{ px: 2, borderRadius: "19px" }}>
          <CardMedia
            sx={{ borderRadius: "19px" }}
            component="img"
            height="194"
            image="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2023-Ford-Mustang-Dark-Horse-red-press-image-1001x565p-(1).jpg"
            alt="Paella dish"
          />
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
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
  );
};

export default Posts;