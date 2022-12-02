import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import CategoryIcon from "@material-ui/icons/Category";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Footer";
import { closeMenu } from "./menuSlice";
import "./styles.scss";

const menuList = [
  {
    title: "Trang chủ",
    href: "/",
    role: "user",
    icon: <HomeIcon />,
  },
  {
    title: "Danh mục",
    href: "category",
    role: "admin",
    icon: <CategoryIcon />,
  },
  {
    title: "Liên kết",
    href: "link",
    role: "admin",
    icon: <LinkIcon />,
  },
  {
    title: "Bài viết",
    href: "news",
    role: "admin",
    icon: <FormatListBulletedIcon />,
  },
  {
    title: "Danh bạ",
    href: "contact",
    role: "admin",
    icon: <ContactPhoneIcon />,
  },
  {
    title: "Sinh nhật",
    href: "birthday",
    role: "admin",
    icon: <CakeIcon />,
  },
  {
    title: "Phòng/ Ban",
    href: "room",
    role: "admin",
    icon: <RoomIcon />,
  },
  {
    title: "Người sử dụng",
    href: "user",
    role: "admin",
    icon: <AccountCircleIcon />,
  },
];

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },

  toogleIcon: {
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
  },

  ListItemText: {
    color: "#00524e",
    fontFamily: "Muli, sans-serif '!important'",
    fontWeight: 500,
    fontSize: "1rem",
  },
}));

export function Menu(props) {
  const theme = useTheme();
  const classes = useStyles();

  const toogleMenu = useSelector((state) => state.toogleMenu);
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    const action = closeMenu();
    dispatch(action);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: toogleMenu,
        [classes.drawerClose]: !toogleMenu,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: toogleMenu,
          [classes.drawerClose]: !toogleMenu,
        }),
      }}
    >
      <div className={classes.toogleIcon}>
        <IconButton onClick={handleCloseMenu}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>

      <Divider />

      <List className="menuList">
        {menuList.map((menu, index) => (
          <ListItem key={menu.href} className="menuList__item">
            <a href={menu.href} className="menuList__title title">
              <div className="title__icon">{menu.icon}</div>
              <div className="title__text">{menu.title}</div>
            </a>
          </ListItem>
        ))}
      </List>

      <Footer />
    </Drawer>
  );
}
