import { unwrapResult } from "@reduxjs/toolkit";
import { xmlRead } from "features/Invoices/invoiceSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import XmlReadForm from "../XmlReadForm";

XmlRead.propTypes = {
  closeDialog: PropTypes.func,
};

function XmlRead(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = xmlRead(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      const { closeDialog } = props; // close dialog
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <XmlReadForm onSubmit={handleSubmit} />
    </div>
  );
}

export default XmlRead;
