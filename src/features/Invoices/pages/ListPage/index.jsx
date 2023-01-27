import { Box, Container, Grid, Paper } from "@material-ui/core";
import InvoiceList from "features/Invoices/components/InvoiceList";

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Paper elevation={0}>
              <InvoiceList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
