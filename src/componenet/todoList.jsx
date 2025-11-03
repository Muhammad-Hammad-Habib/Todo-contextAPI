import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material";
import { AutoDeleteSharp, Edit, Done } from "@mui/icons-material";
// import EditIcon from "@mui/icons-material/Edit";
// import AutoDeleteSharp from "@mui/icons-material/AutoDeleteSharp";
import { useTodos } from "../context_api/context";
import { useState } from "react";

const TodoList = () => {
  const [editToggle, setEditToggle] = useState(false);
  const [editOption, setEditOption] = useState(null);
  const [editText, seteditText] = useState("");
  const { todos, removeTodo, toggleTodoStatus, updateTodo } = useTodos();

  const handleEditToggle = (data) => {
    setEditOption(data.id);
    seteditText(data.title);
  };

  const handleEnableEditOption = () => {
    updateTodo(editOption, editText);
    setEditOption(null);
  };

  return (
    <List sx={{ width: "90%", maxHeight: "410px", overflowY: "auto" }}>
      {todos.map((value, key) => {
        const valueId = `${value.id}`;
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <>
                {editOption == valueId ? (
                  <IconButton
                    id={valueId}
                    onClick={handleEnableEditOption}
                    edge="end"
                    // aria-label="comments"
                  >
                    <Done />
                  </IconButton>
                ) : (
                  <>
                    <IconButton
                      id={valueId}
                      onClick={() => handleEditToggle(value)}
                      edge="end"
                      sx={{ marginRight: "5px" }}
                      // aria-label="comments"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      id={valueId}
                      onClick={(e) => removeTodo(e.currentTarget.id)}
                      edge="end"
                      // aria-label="comments"
                    >
                      <AutoDeleteSharp />
                    </IconButton>
                  </>
                )}
              </>
            }
            disablePadding
          >
            <ListItemButton
              disableRipple
              role={undefined}
              // onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  id={valueId}
                  edge="start"
                  checked={value.completed}
                  tabIndex={-1}
                  onChange={(e) => toggleTodoStatus(e.currentTarget.id)}
                  disableRipple
                  // inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              {editOption == valueId ? (
                <TextField
                  color="primary"
                  fullWidth
                  id="filled-basic"
                  // label="Wrtie ..."
                  variant="outlined"
                  value={editText}
                  onChange={(e) => seteditText(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 1,
                      },
                      "& input": {
                        borderRadius: 1,
                        padding: "0px 10px;",
                        height: "36px",
                      },
                    },
                  }}
                />
              ) : (
                <ListItemText
                  id={valueId}
                  sx={{
                    textDecoration: value.completed ? "line-through" : "none",
                  }}
                  primary={value.title}
                />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
