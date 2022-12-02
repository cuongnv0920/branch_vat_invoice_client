import { makeStyles } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { Header, Menu } from "./components/common";
import News from "./features/News";
import Category from "./features/Category";
import Room from "./features/Rooms";
import Link from "./features/Links";

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
      path: "news/*",
      element: <News />,
      role: "admin",
    },
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
