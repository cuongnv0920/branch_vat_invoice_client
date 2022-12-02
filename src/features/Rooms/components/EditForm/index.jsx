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
  const selected = useSelector((state) => state.room);

  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập Tên phòng/ ban."),
    code: yup.string().required("Vui lòng nhập Mã phòng/ ban."),
  });

  const form = useForm({
    defaultValues: {
      name: selected.name,
      code: selected.code,
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
    <div className="editRoom">
      {isSubmitting && <LinearProgress className="editRoom__progress" />}

      <div className="editRoom__title dialogTitle">
        <Typography className="dialogTitle_content">Sửa phòng/ ban</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Input name="name" label="Tên phòng/ ban" form={form} />
        <Input name="code" label="Mã phòng/ ban" form={form} />

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
