import { Box, Container, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import { Tabpanel } from "components";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { useState } from "react";
import "./styles.scss";

ListPage.propTypes = {};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ListPage(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ marginTop: "15vh", marginBottom: "50px" }}>
      <Container className="pageAuth">
        <Grid container className="pageAuth__grid">
          <Grid
            item
            xs={12}
            lg={4}
            sm={4}
            md={4}
            className="pageAuth__item"
          ></Grid>
          <Grid item xs={12} lg={4} sm={12} md={4} className="pageAuth__item">
            <Paper elevation={2} className="pageAuth__paper">
              <Tabs
                value={value}
                onChange={handleChange}
                className="pageAuth__tabs tabs"
              >
                <Tab
                  label="Đăng nhập"
                  {...a11yProps(0)}
                  className="tabs__tab"
                />
                <Tab label="Đăng ký" {...a11yProps(1)} className="tabs__tab" />
              </Tabs>
              <Tabpanel value={value} index={0}>
                <Login className="pageAuth__table" />
              </Tabpanel>
              <Tabpanel value={value} index={1}>
                <Register />
              </Tabpanel>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sm={12}
            md={4}
            className="pageAuth__item"
          ></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
