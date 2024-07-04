import { Grid, Paper } from "@mui/material";

const Community = () => {
  return (
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
  );
};

export default Community;
