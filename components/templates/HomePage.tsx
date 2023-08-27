//types
import { Data } from "@/types/PostType";

//components
import PostCard from "../modules/Card";

//mui
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function HomePage(props: any) {
  const { data } = props;

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 5 }}
        columns={{ xs: 2 }}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        px={2}
        height={120}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Posts
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" href="/add-post">
            add post
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: "10px" }}
      >
        {data.map((i: Data, index: Number) => (
          <Grid item xs={2} sm={4} md={4} key={i.id}>
            <PostCard {...i} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
