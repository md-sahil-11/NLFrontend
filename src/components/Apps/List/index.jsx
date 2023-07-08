import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import AuthContext from "../../../contexts/AuthContext";
import AppListCard from "./list-card";

export default function AppList() {

  const { apps, listApps } = useContext(AuthContext);

  useEffect(() => {
    listApps();
  }, []);

  return (
    <Box sx={{ width: { sm: 450, md: 700 }, height: 200 }}>
      {apps?.map((item, idx) => (
        <AppListCard item={item}/>
      ))}
    </Box>
  );
}
