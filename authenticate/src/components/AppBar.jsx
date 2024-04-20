import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import ToastContext from "./ToastContext";
import { Avatar } from "@mui/material";

export default function ControlBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { toast } = React.useContext(ToastContext);
  const name = localStorage.getItem("name");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const logoutUserAction = () => {
    toast.success("Logged out successfully!");
    handleClose();
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        bottom: "5%",
        padding: "0 1.5rem",
        width: "-webkit-fill-available",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
        <Toolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="black"
          >
            <Avatar
              alt={"avatar"}
              src={
                "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171867_X85WpWCcMzNsoMWtMxiZQspKzaOwCyuK.jpg"
              }
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={logoutUserAction}>Log Out</MenuItem>
          </Menu>

          <Typography
            variant="h6"
            component="div"
            sx={{ color: "black", ml: 2 }}
          >
            {name}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, ml: 16 }}
            onClick={handleMenu}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
