import { makeStyles } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { Header, Menu } from "./components/common";
import Category from "./features/Category";
import Level from "./features/Levels";
import Link from "./features/Links";
import Margin from "./features/Margin";
import Room from "./features/Rooms";
import User from "./features/Users";
import Deposit from "./features/Deposit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

function App() {
  const routes = [
    {
      path: "category/*",
      element: <Category />,
      role: "admin",
    },
    {
      path: "room/*",
      element: <Room />,
      role: "admin",
    },
    {
      path: "link/*",
      element: <Link />,
      role: "admin",
    },
    {
      path: "level/*",
      element: <Level />,
      role: "admin",
    },
    {
      path: "margin/*",
      element: <Margin />,
      role: "admin",
    },
    {
      path: "user/*",
      element: <User />,
      role: "admin",
    },
    {
      path: "deposit/*",
      element: <Deposit />,
      role: "admin",
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Menu />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
