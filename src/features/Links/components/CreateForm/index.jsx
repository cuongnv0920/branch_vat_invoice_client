import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../../../components/inputField";

CreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateForm(props) {
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập Tên liên kết."),
    sort: yup.string().required("Vui lòng nhập Số sắp xếp."),
    url: yup.string().required("Vui lòng nhập liên kết."),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      sort: 0,
      url: "",
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="createLink">
      <div className="createLink__title dialogTitle">
        <Typography className="dialogTitle_content">Thêm liên kết</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Input name="name" label="Tên liên kết" form={form} />
        <Input name="url" label="Liên kết" form={form} />
        <Input name="sort" type="number" label="Số sắp xếp" form={form} />
        <Button
          className="dialogButtonSave"
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress className="createLink__progress" />
          ) : (
            "Lưu"
          )}
        </Button>
      </form>
    </div>
  );
}

export default CreateForm;
