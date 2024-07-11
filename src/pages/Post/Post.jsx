import { Box, Container, Grid, Toolbar } from "@mui/material";
import PostRightbar from "../../components/Post/PostRightbar";
import PostComponent from "../../components/Post/PostComponent";

const Post = () => {
    return (
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
            <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }} className='home-container-wrapper'>
            <Grid container spacing={3} md={12} lg={8}>
                <PostComponent />
            </Grid>
            <Grid container md={12} lg={4}>
                <PostRightbar />
            </Grid>
            </Container>
        </Box>
    )
}

export default Post