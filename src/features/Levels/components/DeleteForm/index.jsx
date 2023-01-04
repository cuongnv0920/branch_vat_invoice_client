import { Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./styles.scss";

DeleteForm.propTypes = {
  onSubmit: PropTypes.func,
};

function DeleteForm(props) {
  const selected = useSelector((state) => state.level);

  const form = useForm({
    defaultValues: {
      id: selected.id,
    },
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="deleteLevel">
      <div className="deleteLevel__title dialogTitle">
        <Typography className="dialogTitle_content">Xóa chức danh</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="deleteLevel__content">
          <p>{`Bạn có chắc chắn muốn xóa chức danh: "${selected.name}"`}</p>
        </div>

        <Button
          className="dialogButtonDelete"
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress className="deleteLevel__progress" />
          ) : (
            "Xóa"
          )}
        </Button>
      </form>
    </div>
  );
}

export default DeleteForm;
