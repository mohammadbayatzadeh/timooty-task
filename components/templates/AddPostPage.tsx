//mui
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//formik
import { Formik } from "formik";

const defaultTheme = createTheme();

const PostDetailsPage = () => {
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
            <Typography variant="h1" component="h1" sx={{ fontSize: "1.5em" }}>
              create post
            </Typography>

            <Formik
              initialValues={{
                title: "",
                content: "",
                category: "",
                image: "",
              }}
              validate={(values) => {
                const errors = { title: "", content: "", category: "" };

                if (!values.title) {
                  errors.title = "Required";
                } else if (!values.content) {
                  errors.content = "Required";
                } else if (!values.category) {
                  errors.category = "Required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                console.log(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "100vh",
                    }}
                  >
                    <TextField
                      type="title"
                      name="title"
                      label="title"
                      variant="outlined"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ marginTop: "30px" }}
                    />
                    <Typography
                      component="p"
                      color="red"
                      sx={{ fontSize: ".8em" }}
                    >
                      {errors.title && touched.title && errors.title}
                    </Typography>

                    <TextField
                      type="content"
                      name="content"
                      label="content"
                      variant="outlined"
                      multiline
                      value={values.content}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ marginTop: "30px" }}
                    />
                    <Typography
                      component="p"
                      color="red"
                      sx={{ fontSize: ".8em" }}
                    >
                      {errors.content && touched.content && errors.content}
                    </Typography>

                    <TextField
                      type="category"
                      name="category"
                      label="category"
                      variant="outlined"
                      value={values.category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      sx={{ marginTop: "30px" }}
                    />
                    <Typography
                      component="p"
                      color="red"
                      sx={{ fontSize: ".8em" }}
                    >
                      {errors.category && touched.category && errors.category}
                    </Typography>

                    <Button
                      variant="outlined"
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ marginTop: "30px" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default PostDetailsPage;
