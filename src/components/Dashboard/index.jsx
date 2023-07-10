import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AuthContext from "../../contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Person2Icon from '@mui/icons-material/Person2';
import TaskIcon from '@mui/icons-material/Task';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const { user, logoutUser } = React.useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const adminToolbar = [
    {
      text: "Home",
      logo: <HomeIcon />,
      pathname: routes.home.path,
    },
    {
      text: "Add App",
      logo: <AddIcon />,
      pathname: routes.addApp.path,
    },
  ];

  const adminDrawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {adminToolbar.map((item, index) => (
          <Link
            to={item.pathname}
            style={{ textDecoration: "None", color: "#788897" }}
          >
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.logo}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: item.pathname === location.pathname && "#1976D2",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const userToolbar = [
    {
      text: "Home",
      logo: <HomeIcon />,
      pathname: routes.home.path,
    },
    {
      text: "Profile",
      logo: <Person2Icon />,
      pathname: routes.profile.path,
    },
    {
      text: "Task",
      logo: <TaskIcon />,
      pathname: routes.task.path,
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {userToolbar.map((item, index) => (
          <Link
          to={item.pathname}
          style={{ textDecoration: "None", color: "#788897" }}
        >
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.logo}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: item.pathname === location.pathname && "#1976D2",
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Hello {user?.is_superuser ? "Admin" : user?.name} &nbsp;|&nbsp;
              </Typography>

              <Button onClick={logoutUser} color="inherit">
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {user?.is_superuser ? adminDrawer : drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {user?.is_superuser ? adminDrawer : drawer}
          </Drawer>
        </Box>
        <Box
          style={{
            paddingTop: 100,
          }}
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* <Toolbar /> */}
          {props.children}
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
