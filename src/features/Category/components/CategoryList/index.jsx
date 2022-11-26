import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import categoryApi from "../../../../api/categoryApi";
import Create from "../Create";

CategoryList.propTypes = {};

const columns = [
  {
    title: "STT",
    field: "stt",
    editable: "never",
  },
  {
    title: "Tên danh mục",
    field: "name",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Ngày khởi tạo",
    field: "createdAt",
    cellStyle: { whiteSpace: "nowrap" },
  },
];

function CategoryList(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [rowData, setRowData] = useState([]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  useEffect(() => {
    const fetchCategorys = async () => {
      const categorys = await categoryApi.list();

      setRowData(
        categorys.map((category, index) => ({ ...category, stt: index + 1 }))
      );
    };
    fetchCategorys();
  }, [openDialog]);

  return (
    <>
      <MaterialTable
        title={
          <div className="materialTableTitle">
            <Typography className="materialTableTitle_content" variant="h6">
              Danh sách danh mục
            </Typography>
          </div>
        }
        columns={columns}
        data={rowData}
        actions={[
          {
            icon: () => <AddCircleIcon className="materialTableIconAdd" />,
            tooltip: "Add News",
            isFreeAction: true,
            onClick: handleOpenDialog,
          },

          {
            icon: () => <DeleteIcon className="materialTableIconDelete" />,
            tooltip: "Delete News",
            onClick: () => console.log("Delete News"),
          },

          {
            icon: () => <EditIcon className="materialTableIconEdit" />,
            tooltip: "Edit News",
            onClick: () => console.log("Edit News"),
          },
        ]}
        options={{
          tableLayout: "auto",
          headerStyle: {
            fontSize: "0.8rem",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            color: "#1c2e36",
            fontFamily: "'Muli', sans-serif",
          },

          rowStyle: {
            fontSize: "0.8rem",
          },
          selection: true,
          pageSizeOptions: [10, 20, 30, 50],
          pageSize: 10,
          paging: true,
          addRowPosition: "first",
        }}
      />

      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialog(event, reason);
          }
        }}
      >
        <DialogContent>
          <Create closeDialog={handleCloseDialog} />
        </DialogContent>

        <DialogActions className="dialogAction">
          <Button className="dialogButtonCancel" onClick={handleCloseDialog}>
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CategoryList;
