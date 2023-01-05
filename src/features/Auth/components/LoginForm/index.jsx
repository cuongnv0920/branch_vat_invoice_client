import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input, Password } from "../../../../components/inputField";
import "./styles.scss";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập tên đăng nhập."),
    password: yup.string().required("Vui lòng nhập mật khẩu người dùng."),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
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
    <div className="login">
      <Avatar className="login__avatar">
        <LockOpenIcon />
      </Avatar>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Input name="username" label="Tên đăng nhập" form={form} />
        <Password name="password" label="Mật khẩu" form={form} />

        <Button
          className="dialogButtonSave"
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress className="login__progress" color="secondary" />
          ) : (
            "Đăng nhập"
          )}
        </Button>
      </form>

      <div className="login__footer">
        <h5>Hệ thống quản lý Website nội bộ chi nhánh</h5>
        <h5>Copyright © 2022 | BIDV - Chi nhánh Gia Lâm | Version 1.1</h5>
      </div>
    </div>
  );
}

export default LoginForm;
