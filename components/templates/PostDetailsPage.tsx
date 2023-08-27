//types
import { comments } from "@/types/CommentType";

//mui
import {
  Box,
  CardMedia,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const defaultTheme = createTheme();

const PostDetailsPage = (props: any) => {
  const { content, title, publishedAt, slug, image } = props.data;
  const { commentsData } = props;
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container component="main" sx={{ my: 2 }} maxWidth="md">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontSize: "1.5em" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontSize: "1em" }}
              color={"gray"}
            >
              {publishedAt}
            </Typography>
            <CardMedia component="img" height="400" image={image} alt={slug} />
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
            <Typography variant="body1" mt={5}>
              Comments
            </Typography>
            {commentsData.length ? (
              commentsData.map((i: comments, index: Number) => (
                <Box key={i.id}>
                  <Typography
                    variant="h5"
                    component=""
                    sx={{ fontSize: ".8em" }}
                    color={"gray"}
                    mt={2}
                  >
                    {index}. {i.comment}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1" color={"red"}>
                there is no comment
              </Typography>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default PostDetailsPage;
