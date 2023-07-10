import "./app-detail.css";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import AppListCard from "../../components/Apps/List/list-card";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function AppDetail() {
  useDocumentTitle("App detail");

  const { user, app, getApp, addTask, toast } = useContext(AuthContext);
  const { id } = useParams();
  const [screenShot, setScreenShot] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setScreenShot(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!screenShot) {
      toast.error("Please, add screenshot of the app to complete this task.")
      return
    }
    
    const form = new FormData();
    form.append("user_id", user.id);
    form.append("app_id", app.id);
    form.append("is_completed", true);
    form.append("screenshot", screenShot);

    addTask(form);
  };

  useEffect(() => {
    console.log(app);
  }, [app]);

  useEffect(() => {
    getApp(id);
  }, [id]);

  return (
    <Box sx={{ width: { sm: 450, md: 700 } }}>
      <Box sx={{ backgroundColor: "#ffffff", mb: 2, p: 2 }}>
        <AppListCard item={app} detail={true} />
        <br />
        {!user?.is_superuser && (
          <>
            <div class="image-upload">
              <input
                type="file"
                name=""
                id="logo"
                onChange={handleImageUpload}
              />
              <label for="logo" class="upload-field" id="file-label">
                <div class="file-thumbnail">
                  {app?.task_screenshot ? (
                    <img
                      style={{ height: 150, width: 150, objectFit: "cover" }}
                      src={app?.task_screenshot}
                      alt=""
                    />
                  ) : (
                    <>
                      {!screenShot ? (
                        <InsertPhotoOutlinedIcon
                          sx={{
                            fontSize: { xs: "8rem", sm: "10rem", md: "12rem" },
                            color: "#788897",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <img
                          style={{
                            height: 150,
                            width: 150,
                            objectFit: "cover",
                          }}
                          src={URL.createObjectURL(screenShot)}
                          alt=""
                        />
                      )}
                    </>
                  )}
                  <h3 id="filename">Drag and Drop</h3>
                  <p>Supports JPG, PNG, SVG</p>
                </div>
              </label>
            </div>
            <br />
            <Button onClick={handleSubmit}>Complete</Button>
          </>
        )}
      </Box>
      <br />
      <br />
    </Box>
  );
}
