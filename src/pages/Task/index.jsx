import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TaskListCard from "../../components/Task/list-card";

function Task() {
  useDocumentTitle("Tasks");
  const { tasks, getTasks, editTask } = useContext(AuthContext);
  const [completed, setCompleted] = useState(1);
  
  useEffect(() => {
    console.log("here")
    getTasks(completed);
  }, [completed]);

  return (
    <Box sx={{ width: { sm: 450, md: 700 }, height: 200 }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button variant={completed === 1 && "contained"} onClick={() => setCompleted(1)}>Completed</Button>
        <Button variant={completed === 0 && "contained"} onClick={() => setCompleted(0)}>Pending</Button>
      </ButtonGroup>
      <Box>
        {tasks?.map((item, idx) => (
          <TaskListCard key={idx} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Task;
