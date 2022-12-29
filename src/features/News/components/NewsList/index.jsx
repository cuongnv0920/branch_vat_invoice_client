import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { marginApi } from "../../../../api";
import api from "../../../../configs/api.conf";
import Moment from "react-moment";
import Create from "../Create";
// import Delete from "../Delete";
// import Edit from "../Edit";
import { useSnackbar } from "notistack";
import "./styles.scss";
// import { removeSelected, selected } from "../../marginSlice";

NewsList.propTypes = {};

const columns = [
  {
    title: "STT",
    field: "stt",
    editable: "never",
  },
  {
    title: "Tiêu đề",
    field: "title",
    editable: "never",
  },
  {
    title: "User khởi tạo",
    field: "user",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Đặc tính",
    field: "type",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Ngày khởi tạo",
    field: "createdAt",
    render: (row) => <Moment format="DD/MM/YYYY">{row.createdAt}</Moment>,
    cellStyle: { whiteSpace: "nowrap" },
  },
];

function NewsList(props) {
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  // const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [onSelected, setOnSelected] = useState();
  const [rowData, setRowData] = useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleCloseDialogCreate = () => {
    setOpenDialogCreate(false);
  };

  const handleOpenDialogCreate = () => {
    setOpenDialogCreate(true);
  };

  // const handleCloseDialogEdit = async () => {
  //   const action = removeSelected();
  //   await dispatch(action);

  //   setOpenDialogEdit(false);
  // };

  //   const handleCloseDialogDelete = async () => {
  //     const action = removeSelected();
  //     await dispatch(action);

  //     setOpenDialogDelete(false);
  //   };

  // const onRowUpdate = async () => {
  //   if (onSelected?.length >= 2) {
  //     enqueueSnackbar("Bạn chỉ được chọn 1 dòng.", { variant: "warning" });
  //   } else {
  //     const action = selected(onSelected[0]);
  //     await dispatch(action);

  //     setOpenDialogEdit(true);
  //   }
  // };

  //   const onRowDelete = async () => {
  //     if (onSelected?.length >= 2) {
  //       enqueueSnackbar("Bạn chỉ được chọn 1 dòng.", { variant: "warning" });
  //     } else {
  //       const action = selected(onSelected[0]);
  //       await dispatch(action);

  //       setOpenDialogDelete(true);
  //     }
  //   };

  // useEffect(() => {
  //   const fetchMargins = async () => {
  //     const margins = await marginApi.list();

  //     setRowData(
  //       margins.map((margin, index) => ({ ...margin, stt: index + 1 }))
  //     );
  //   };
  //   fetchMargins();
  // }, [openDialogCreate, openDialogEdit]);

  return (
    <>
      <MaterialTable
        title={
          <div className="materialTableTitle">
            <Typography className="materialTableTitle_content" variant="h6">
              Danh sách bài viết
            </Typography>
          </div>
        }
        columns={columns}
        data={rowData}
        onSelectionChange={(row) => setOnSelected(row)}
        actions={[
          {
            icon: () => <AddCircleIcon className="materialTableIconAdd" />,
            tooltip: "Thêm biên độ tỷ giá",
            isFreeAction: true,
            onClick: handleOpenDialogCreate,
          },
          //   {
          //     icon: () => <DeleteIcon className="materialTableIconDelete" />,
          //     tooltip: "Xóa liên kết",
          //     onClick: onRowDelete,
          //   },
          // {
          //   icon: () => <EditIcon className="materialTableIconEdit" />,
          //   tooltip: "Sửa biên độ tỷ giá",
          //   onClick: onRowUpdate,
          // },
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
          showSelectAllCheckbox: false,
          maxBodyHeight: 350,
        }}
      />

      <Dialog
        fullWidth="md"
        maxWidth="md"
        open={openDialogCreate}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialogCreate(event, reason);
          }
        }}
      >
        <DialogContent>
          <Create closeDialog={handleCloseDialogCreate} />
        </DialogContent>

        <DialogActions className="dialogAction">
          <Button
            className="dialogButtonCancel"
            onClick={handleCloseDialogCreate}
          >
            Thoát
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Dialog
        mfullWidth="xs"
        maxWidth="xs"
        open={openDialogEdit}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialogEdit(event, reason);
          }
        }}
      >
        <DialogContent>
          <Edit closeDialog={handleCloseDialogEdit} />
        </DialogContent>

        <DialogActions className="dialogAction">
          <Button
            className="dialogButtonCancel"
            onClick={handleCloseDialogEdit}
          >
            Thoát
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* <Dialog
        fullWidth="sm"
        maxWidth="sm"
        open={openDialogDelete}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialogDelete(event, reason);
          }
        }}
      >
        <DialogContent>
          <Delete closeDialog={handleCloseDialogDelete} />
        </DialogContent>

        <DialogActions className="dialogAction">
          <Button
            className="dialogButtonCancel"
            onClick={handleCloseDialogDelete}
          >
            Thoát
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}

export default NewsList;
