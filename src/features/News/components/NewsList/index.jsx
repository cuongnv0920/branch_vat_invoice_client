import { Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

NewsList.propTypes = {};

const columns = [
  {
    title: "STT",
    field: "stt",
    editable: "never",
  },
  {
    title: "Danh mục",
    field: "category",
    cellStyle: { whiteSpace: "nowrap" },
  },
  {
    title: "Tiêu đề",
    field: "title",
    cellStyle: { whiteSpace: "nowrap" },
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
];

const data = [
  {
    stt: 1,
    category: "Thông báo nội bộ",
    title:
      "Đây là bài viết dùng để kiểm tra Table quản trị có hoạt động tốt ko.",
    user: "cuongnv12",
    type: "New",
  },
];

function NewsList(props) {
  return (
    <>
      <MaterialTable
        title={
          <div className="materialTableTitle">
            <Typography className="materialTableTitle_content" variant="h6">
              Danh sách Bài viết
            </Typography>
          </div>
        }
        columns={columns}
        data={data}
        actions={[
          {
            icon: () => <AddCircleIcon className="materialTableIconAdd" />,
            tooltip: "Add News",
            isFreeAction: true,
            onClick: () => console.log("Add News"),
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
    </>
  );
}

export default NewsList;
