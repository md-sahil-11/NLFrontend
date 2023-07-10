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
  Divider,
} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AuthContext from "../../../contexts/AuthContext";

function AppCreateForm() {
  const { categories, getCategories, addApp, toast, addCategory } =
    useContext(AuthContext);
  const [logo, setLogo] = useState(null);
  const [points, setPoints] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [newCategory, setNewCategory] = useState(""); // add category data

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setLogo(file);
    if (file) document.getElementById("logo").src = URL.createObjectURL(file);
    console.log("Uploaded file:", file);
  };

  const handleSubmit = () => {
    if (!!!points || !!!link || !!!title || logo === null) {
      toast.error("All fields are compulsory!");
      return;
    }
    const data = new FormData();
    data.append("points", points);
    data.append("link", link);
    data.append("title", title);
    data.append("category_id", category);
    data.append("sub_category_id", subCategory);
    data.append("logo", logo);
    try {
      addApp(data);
    } catch (err) {
      toast.error("Something went wrong!!!");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#ffffff", maxWidth: 800, p: 3 }}>
      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid item xs={12}>
          <label htmlFor="upload-input">
            {!logo && (
              <InsertPhotoOutlinedIcon
                sx={{
                  fontSize: { xs: "8rem", sm: "10rem", md: "12rem" },
                  color: "#788897",
                  cursor: "pointer",
                }}
              />
            )}
            <img style={{ height: 200 }} id="logo" src="" alt="" />
          </label>
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required={true}
            onChange={(e) => setTitle(e.target.value)}
            label="App Name"
            variant="outlined"
            size="small"
            sx={{
              "& input": {
                width: 250, // Specify the desired width
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setLink(e.target.value)}
            label="App Link"
            variant="outlined"
            size="small"
            sx={{
              "& input": {
                width: 250, // Specify the desired width
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ minWidth: 280 }} size="small">
            <InputLabel>App Category</InputLabel>
            <Select
              id="app-category"
              label="App Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories?.map((item, idx) => (
                <MenuItem key={idx} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ minWidth: 280 }} size="small">
            <InputLabel>Sub Category</InputLabel>
            <Select
              id="sub-category"
              label="Sub Category"
              onChange={(e) => setSubCategory(e.target.value)}
            >
              {categories?.map((item, idx) => (
                <MenuItem key={idx} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type={"number"}
            label="Add Points"
            onChange={(e) => setPoints(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "#8DD7CE",
              fontWeight: 700,
              padding: 1.1,
              width: 200,
              "& input": {
                width: 250, // Specify the desired width
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <Box sx={{ m: 3 }}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setNewCategory(e.target.value)}
              label="Add Category"
              variant="outlined"
              size="small"
              sx={{
                "& input": {
                  width: 250, // Specify the desired width
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                addCategory({ title: newCategory });
                getCategories();
              }}
            >
              Add Category
            </Button>
          </Grid>
        </Grid>
      </Box>
      <br />
    </Box>
  );
}

export default AppCreateForm;
