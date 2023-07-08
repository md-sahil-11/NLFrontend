import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import routes from "../../../routes";

export default function AppListCard({ item }) {

  return (
    <Box key={item.id} sx={{ p: 2 }}>
      <Card elevation={0} sx={{ display: "flex", p: 2, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 150 }}
            image={item.logo}
            alt="Live from space album cover"
          />
          <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
            <Typography component="div" variant="h5">
              {item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <Link to={routes.detailApp.makePath(item.id)}>Details</Link>
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            elevation={0}
            sx={{
              backgroundColor: "#8DD7CE",
              fontWeight: 700,
              padding: 1.1,
              maxWidth: 200,
              minWidth: 120,
              color: "#000000"
            }}
            variant="contained"
          >
            {item.points} POINTS
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
