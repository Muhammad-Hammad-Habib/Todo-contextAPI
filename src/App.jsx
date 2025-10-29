import { Box, Container, CssBaseline, Grid } from "@mui/material";
// import "./App.css";
import TodoList from "./componenet/todoList";
import TodoAdd from "./componenet/todoAdd";

function App() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box
          component="section"
          sx={{
            bgcolor: "#ffffffff",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              border: "1px solid lightgray",
              borderRadius: 3,
              width: "550px",
              height: "500px",
              boxShadow: 1 
            }}
          >
            <Grid
              container
              columnSpacing={1}
              sx={{
                width: "inherit",
                padding: "10px",
              }}
            >
              {/*  TODO field input and Add Todo button  */}
              <TodoAdd />

              <Grid
                size={{ xs: 12 }}
                sx={{
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Todo list with with listing, delete, check mark */}
                <TodoList />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
