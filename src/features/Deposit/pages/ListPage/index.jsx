import { Box, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import DepositList from "../../components/DepositList";

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Paper elevation={0}>
              <DepositList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
