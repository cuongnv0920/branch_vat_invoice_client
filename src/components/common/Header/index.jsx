import { IconButton, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../Menu/menuSlice";

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
  },

  menuButton: {
    marginRight: 36,
  },

  hide: {
    display: "none",
  },
}));

export function Header(props) {
  const classes = useStyle();

  const toogleMenu = useSelector((state) => state.toogleMenu);
  const dispath = useDispatch();

  const handleOpenMenu = () => {
    const action = openMenu();
    dispath(action);
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: toogleMenu,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={handleOpenMenu}
          className={clsx(classes.menuButton, {
            [classes.hide]: toogleMenu,
          })}
        >
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title}>
          NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM - CHI NHÁNH GIA LÂM
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
