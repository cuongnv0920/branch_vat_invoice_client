import { Button, LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Input } from "../../../../components/inputField";
import "./styles.scss";

CreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateForm(props) {
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập Tên phòng/ ban."),
    code: yup.string().required("Vui lòng nhập Mã phòng/ ban."),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      code: "",
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
    <div className="createRoom">
      {isSubmitting && <LinearProgress className="createRoom__progress" />}

      <div className="createRoom__title dialogTitle">
        <Typography className="dialogTitle_content">Thêm phòng/ ban</Typography>
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

export default CreateForm;
