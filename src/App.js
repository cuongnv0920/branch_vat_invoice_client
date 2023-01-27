import { makeStyles } from "@material-ui/core";
import { Drawer } from "components";
import Auth from "features/Auth";
import Invoice from "features/Invoices";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

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
  const logged = useSelector((state) => state.auth.current);
  const isLogged = !!logged._id;
  const classes = useStyles();

  const routes = [
    {
      path: "invoice/*",
      element: <Invoice />,
      role: "user",
    },
  ];

  return (
    <div>
      {!isLogged && (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}

      {isLogged && (
        <div className={classes.root}>
          <Drawer />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
