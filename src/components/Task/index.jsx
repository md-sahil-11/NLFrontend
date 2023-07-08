import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
// import AuthContext from "../../contexts/AuthContext";
import TaskListCard from "./list-card";

export default function AppList({ tasks }) {

  return (
    <Box sx={{ width: { sm: 450, md: 700 }, height: 200 }}>
      {tasks?.map((item, idx) => (
        <TaskListCard item={item}/>
      ))}
    </Box>
  );
}
