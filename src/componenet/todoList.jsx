import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import AutoDeleteSharpIcon from "@mui/icons-material/AutoDeleteSharp";
import { useTodos } from "../context_api/context";

const TodoList = () => {
  const { todos, removeTodo, toggleTodoStatus } = useTodos();

  // console.log(removeTodo);

  return (
    <List sx={{ width: "90%", maxHeight: "410px", overflowY: "auto" }}>
      {todos.map((value, key) => {
        const valueId = `${value.id}`;
        const labelId = `checkbox-list-label-${value}`;
        // console.log(key)
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton
                id={valueId}
                onClick={(e) => removeTodo(e.currentTarget.id)}
                edge="end"
                aria-label="comments"
              >
                <AutoDeleteSharpIcon />
              </IconButton>
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
              <ListItemText
                id={valueId}
                sx={{
                  textDecoration: value.completed ? "line-through" : "none",
                }}
                primary={value.title}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
