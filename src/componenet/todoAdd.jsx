import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTodos } from "../context_api/context";
import { v4 as uuidv4 } from 'uuid';

// uuidv4();

const TodoAdd = () => {
  const { todos, addTodo } = useTodos();
  const [todoInput, setTodoInput] = useState("");
  const handleAddTodo = () => {
    addTodo([
      ...todos,
      {
        id: uuidv4(),
        title: todoInput,
        completed: false,
      },
    ]);
    setTodoInput("");
  };
  return (
    <>
      <Grid size={{ xs: 9 }}>
        <TextField
          color="primary"
          fullWidth
          id="filled-basic"
          label="Wrtie ..."
          variant="outlined"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                // borderColor: "black", // default
                borderRadius: 2,
              },
            },
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 3 }}
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 2 }}
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Grid>
    </>
  );
};

export default TodoAdd;
