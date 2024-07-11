import { alpha, Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, InputBase, styled, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from '@mui/icons-material/Send';
import '../../pages/Post/Post.scss';
import PostComments from "./PostComments";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Button = styled("button")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `1em`,
    paddingRight: `4em`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));


const PostComponent = () => {
  return (
    <Grid item>
      <Card
        sx={{
          width: "100%",
          background: 'rgba(4, 118, 168, 0.07)'
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
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between", mt: 3, px:2 }}
        >
          <Box>
            <IconButton aria-label="add to favorites" sx={{ bgcolor: 'rgba(51, 51, 51, 0.08)', borderRadius: '19px', px: 2  }}>
              <Box component={"span"} sx={{ fontSize: '19px', mr: '3px' }}>40</Box>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="share" sx={{ bgcolor: 'rgba(51, 51, 51, 0.08)', ml: 2, borderRadius: '19px', px: 2 }}>
              <Box component={"span"} sx={{ fontSize: '19px', mr: '3px' }}>22</Box>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Box>
          <IconButton aria-label="share">
            <BookmarkBorderIcon />
          </IconButton>
        </CardActions>
        <Box className="comment-box" sx={{ my: 2 }}>
          <Search sx={{ height: "100%" }}>
            <StyledInputBase
              placeholder="Comment yaz..."
              sx={{ width: "100%" }}
              inputProps={{ "aria-label": "search" }}
            />
            <Button
              type="submit"              
              sx={{ ml: 1, height: "100%" }}
            >
              <SendIcon sx={{ color: 'primary.main' }} />
            </Button>
          </Search>
        </Box>
        <Typography variant="h5" sx={{ px: 2 }}>Commentlər:</Typography>
        <PostComments />
      </Card>

    </Grid>
  );
};

export default PostComponent;