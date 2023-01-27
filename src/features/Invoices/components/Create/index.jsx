import React from "react";
import CreateForm from "../CreateForm";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { unwrapResult } from "@reduxjs/toolkit";
import { create } from "features/Invoices/invoiceSlice";

Create.propTypes = {
  closeDialog: PropTypes.func,
};

function Create(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = create(values);
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
      <CreateForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Create;
