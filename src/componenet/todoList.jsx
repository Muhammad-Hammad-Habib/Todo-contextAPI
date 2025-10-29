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

const TodoList = () => {

  return (
    <List sx={{ width: "80%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[1,2, 76, 3].map((value, key) => {
        const labelId = `checkbox-list-label-${value}`;
        console.log(key)
        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
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
                  edge="start"
                  // checked={checked.includes(value)}
                  tabIndex={-1}
                  // disableRipple
                  // inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
