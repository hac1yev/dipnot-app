import { Box, Container, Grid, Toolbar } from '@mui/material';
import Community from '../../components/Home/Community';
import Posts from '../../components/Home/Posts';
import './Home.scss';

const Home = () => {
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
              <Posts />
          </Grid>
          <Grid container md={12} lg={4}>
            <Community />
          </Grid>
        </Container>
    </Box>
  )
}

export default Home