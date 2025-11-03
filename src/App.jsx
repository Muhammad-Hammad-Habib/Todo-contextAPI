import { Box, Container, CssBaseline, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TodoList from "./componenet/todoList";
import { TodoProvider } from "./context_api/context.js";
import TodoAdd from "./componenet/todoAdd";

function App() {
  const [todos, addTodo] = useState([]);
  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    addTodo(JSON.parse(localStorage.getItem("todos")));
  }, []);
  const removeTodo = (id) => {
    const afterDeleteData = todos.filter((value, key) => value.id !== id);
    addTodo(afterDeleteData);
  };
  const toggleTodoStatus = (id) => {
    const afterToggleData = todos.map((value, key) =>
      value.id == id ? { ...value, completed: !value.completed } : value
    );
    addTodo(afterToggleData);
  };
  const updateTodo = (id, title) => {
    const UpdateData = todos.map((value, key) =>
      value.id == id ? { ...value, title } : value
    );
    addTodo(UpdateData);
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleTodoStatus }}
    >
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
              boxShadow: 1,
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
    </TodoProvider>
  );
}

export default App;
