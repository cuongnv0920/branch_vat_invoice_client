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
import { useDispatch } from "react-redux";
import Moment from "react-moment";
// import { roomApi } from "../../../../api/index";
// import { removeSelected, selected } from "../../roomSlice";
// import Delete from "../Delete";
// import Edit from "../Edit";
import { useSnackbar } from "notistack";
import XmlRead from "../XmlRead";

InvoiceList.propTypes = {};

const columns = [
  {
    title: "STT",
    field: "stt",
    editable: "never",
  },
  {
    title: "Tên đơn vị",
    field: "seller",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Mã số thuế",
    field: "taxCode",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Ký hiệu",
    field: "serial",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Số hóa đơn",
    field: "no",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Ngày hóa đơn",
    field: "date",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Ngày khởi tạo",
    field: "createdAt",
    render: (row) => <Moment format="DD/MM/YYYY">{row.createdAt}</Moment>,
    cellStyle: { whiteSpace: "nowrap" },
  },
];

function InvoiceList(props) {
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
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

  // const handleCloseDialogDelete = async () => {
  //   const action = removeSelected();
  //   await dispatch(action);

  //   setOpenDialogDelete(false);
  // };

  // const onRowUpdate = async () => {
  //   if (onSelected?.length >= 2) {
  //     enqueueSnackbar("Bạn chỉ được chọn 1 dòng.", { variant: "warning" });
  //   } else {
  //     const action = selected(onSelected[0]);
  //     await dispatch(action);

  //     setOpenDialogEdit(true);
  //   }
  // };

  // const onRowDelete = async () => {
  //   if (onSelected?.length >= 2) {
  //     enqueueSnackbar("Bạn chỉ được chọn 1 dòng.", { variant: "warning" });
  //   } else {
  //     const action = selected(onSelected[0]);
  //     await dispatch(action);

  //     setOpenDialogDelete(true);
  //   }
  // };

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     const rooms = await roomApi.getAll();

  //     setRowData(rooms.map((room, index) => ({ ...room, stt: index + 1 })));
  //   };
  //   fetchRooms();
  // }, [openDialogCreate, openDialogEdit, openDialogDelete]);

  return (
    <>
      <MaterialTable
        title={
          <div className="materialTableTitle">
            <Typography className="materialTableTitle_content" variant="h6">
              Danh sách hóa đơn điện tử
            </Typography>
          </div>
        }
        columns={columns}
        data={rowData}
        onSelectionChange={(row) => setOnSelected(row)}
        actions={[
          {
            icon: () => <AddCircleIcon className="materialTableIconAdd" />,
            tooltip: "Thêm hóa đơn",
            isFreeAction: true,
            onClick: handleOpenDialogCreate,
          },
          // {
          //   icon: () => <DeleteIcon className="materialTableIconDelete" />,
          //   tooltip: "Xóa phòng/ ban",
          //   onClick: onRowDelete,
          // },
          // {
          //   icon: () => <EditIcon className="materialTableIconEdit" />,
          //   tooltip: "Sửa phòng/ ban",
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
          maxBodyHeight: 680,
        }}
      />

      <Dialog
        fullWidth="xs"
        maxWidth="xs"
        open={openDialogCreate}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleCloseDialogCreate(event, reason);
          }
        }}
      >
        <DialogContent>
          <XmlRead closeDialog={handleCloseDialogCreate} />
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
        fullWidth="sm"
        maxWidth="sm"
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
        minWidth="sm"
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

export default InvoiceList;
