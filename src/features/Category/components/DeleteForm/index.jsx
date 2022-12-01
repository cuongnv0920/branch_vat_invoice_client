import { Button, LinearProgress, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./styles.scss";

DeleteForm.propTypes = {
  onSubmit: PropTypes.func,
};

function DeleteForm(props) {
  const selected = useSelector((state) => state.category);

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
    <div className="deleteCategory">
      {isSubmitting && <LinearProgress className="deleteCategory__progress" />}

      <div className="deleteCategory__title dialogTitle">
        <Typography className="dialogTitle_content">Xóa danh mục</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="deleteCategory__content">
          <p>{`Bạn có chắc chắn muốn xóa danh mục: "${selected.name}"`}</p>
        </div>

        <Button
          className="dialogButtonDelete"
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
        >
          Xóa
        </Button>
      </form>
    </div>
  );
}

export default DeleteForm;
