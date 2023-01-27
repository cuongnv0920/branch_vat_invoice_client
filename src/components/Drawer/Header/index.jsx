import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  ListItemIcon,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";
import { openMenu } from "../drawerSlice";
import { logout } from "features/Auth/authSlice";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import Setting from "features/Auth/components/Setting";

Header.propTypes = {};

const drawerWidth = 200;

const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  toolbar: {
    minHeight: "50px",
    backgroundColor: "#fff",
  },

  title: {
    color: "#00524e",
    fontFamily: "Muli, sans-serif",
    fontWeight: 600,
    fontSize: "1.3rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
  },

  menuButton: {
    marginRight: 36,
  },

  hide: {
    display: "none",
  },

  listItemIcon: {
    minWidth: "35px",
  },
}));

function Header(props) {
  const classes = useStyle();
  const openDrawer = useSelector((state) => state.drawer);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSetting, setOpenSetting] = useState(false);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    const action = openMenu();
    dispath(action);
  };

  const handleLogout = () => {
    const action = logout();
    dispath(action);

    navigate("/", { replace: true });
  };

  const handleOpenMenuDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenuDropdown = () => {
    setAnchorEl(null);

    setOpenSetting(true);
  };
  const handleCloseSetting = () => {
    setOpenSetting(false);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleOpenMenu}
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title}>
            NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM - QUẬN 7 SÀI GÒN
          </Typography>

          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            title="User"
            onClick={handleOpenMenuDropdown}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenuDropdown}
          >
            <MenuItem onClick={handleCloseMenuDropdown}>
              <ListItemIcon className={classes.listItemIcon}>
                <SettingsIcon style={{ color: "#00a152" }} fontSize="small" />
              </ListItemIcon>
              Cài đặt tài khoản
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <ListItemIcon className={classes.listItemIcon}>
                <ExitToAppIcon style={{ color: "#f50057" }} fontSize="small" />
              </ListItemIcon>
              Thoát
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Dialog
        fullWidth="xs"
        maxWidth="xs"
        open={openSetting}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseSetting(event, reason);
          }
        }}
      >
        <DialogContent>
          <Setting closeDialog={handleCloseSetting} />
        </DialogContent>
        <DialogActions className="dialogAction">
          <Button className="dialogButtonCancel" onClick={handleCloseSetting}>
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Header;
