import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function AddTaskForm() {
    return ( 

        <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          mb: "5px",
          mt: "2rem"
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="New Task"
          inputProps={{ "aria-label": "New Task" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <AddIcon />
        </IconButton>
      </Paper>
     );
}

export default AddTaskForm;