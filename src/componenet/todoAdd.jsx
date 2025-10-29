import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const TodoAdd = () => {
  return (
    <>
      <Grid size={{ xs: 9 }}>
        <TextField
          color="primary"
          fullWidth
          id="filled-basic"
          label="Wrtie ..."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                // borderColor: "black", // default
                borderRadius : 2
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
        <Button variant="contained" size="large" sx={{borderRadius :2}}>
          Add Todo
        </Button>
      </Grid>
    </>
  );
};

export default TodoAdd;
