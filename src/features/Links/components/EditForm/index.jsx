import { Button, LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Input } from "../../../../components/inputField";
import "./styles.scss";
import { useSelector } from "react-redux";

EditForm.propTypes = {
  onSubmit: PropTypes.func,
};

function EditForm(props) {
  const selected = useSelector((state) => state.link);

  const schema = yup.object().shape({
    title: yup.string().required("Vui lòng nhập Tiêu đề liên kết."),
    url: yup.string().required("Vui lòng nhập liên kết."),
  });

  const form = useForm({
    defaultValues: {
      title: selected.title,
      url: selected.url,
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
      {isSubmitting && <LinearProgress className="editLink__progress" />}

      <div className="editLink__title dialogTitle">
        <Typography className="dialogTitle_content">Sửa liên kết</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Input name="title" label="Tiêu đề" form={form} />
        <Input name="url" label="Liên kết" form={form} />

        <Button
          className="dialogButtonSave"
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
        >
          Lưu
        </Button>
      </form>
    </div>
  );
}

export default EditForm;
