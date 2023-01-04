import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { Input } from "../../../../components/inputField";

EditForm.propTypes = {
  onSubmit: PropTypes.func,
};

function EditForm(props) {
  const selected = useSelector((state) => state.link);

  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập Tên liên kết."),
    sort: yup.string().required("Vui lòng nhập Số sắp xếp."),
    url: yup.string().required("Vui lòng nhập liên kết."),
  });

  const form = useForm({
    defaultValues: {
      name: selected.name,
      url: selected.url,
      sort: selected.sort,
      id: selected.id,
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
    <div className="editLink">
      <div className="editLink__title dialogTitle">
        <Typography className="dialogTitle_content">Sửa liên kết</Typography>
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
            <CircularProgress className="editLink__progress" />
          ) : (
            "Lưu"
          )}
        </Button>
      </form>
    </div>
  );
}

export default EditForm;
