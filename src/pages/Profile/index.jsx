import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import AuthContext from "../../contexts/AuthContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Profile() {
  const { user, getUser } = React.useContext(AuthContext);
  useDocumentTitle("Profile")

  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Card sx={{ width: { md: 400, sm: 320 }}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Points earned
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {`${user.points} / ${user.total_points}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item sm={12} md={6}>
          <Card sx={{ width: { md: 400, sm: 320 }}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Task Completed
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {`${user.task_completed} / ${user.task_total}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
