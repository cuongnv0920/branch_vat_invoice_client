import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
} from "@material-ui/core";
import { levelApi, roomApi } from "api";
import {
  DateField,
  InputField,
  PasswordField,
  RadioField,
  SelectField,
} from "components";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import * as yup from "yup";
import "./styles.scss";

SettingForm.propTypes = {
  onSubmit: PropTypes.func,
};

function SettingForm(props) {
  const user = useSelector((state) => state.auth.current);
  const [rooms, setRooms] = useState([]);
  const [levels, setLevels] = useState([]);
  const [sex, setSex] = useState(user.sex);
  const [birthday, setBirthday] = useState(user.birthday);

  const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập họ và tên người dùng."),
    email: yup
      .string()
      .required("Vui lòng nhập địa chỉ email người dùng.")
      .email("Địa chỉ email không hợp lệ."),
    retypePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Mật khẩu xác nhận không đúng."),
    room: yup.string().required("Vui phòng chọn phòng/ ban."),
    level: yup.string().required("Vui phòng chọn chức danh."),
    phone: yup.string().required("Vui phòng nhập số điện thoại di động."),
  });

  const form = useForm({
    defaultValues: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      password: "",
      retypePassword: "",
      room: user.room,
      level: user.level,
      phone: user.phone,
      ext: user.ext,
      sex: sex,
      birthday: birthday,
    },

    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const rooms = await roomApi.getAll();
      setRooms(rooms);
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const fetchLevels = async () => {
      const levels = await levelApi.getAll();
      setLevels(levels);
    };
    fetchLevels();
  }, []);

  const handleChangeBirtday = (date) => {
    setBirthday(date);
  };
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="setting">
      <Avatar className="setting__avatar">
        <SettingsIcon />
      </Avatar>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField
          name="retypePassword"
          label="Xác nhận mật khẩu"
          form={form}
        />
        <SelectField name="room" label="Phòng/ ban" form={form}>
          {rooms.map((room, _) => (
            <MenuItem value={room.id}>{room.name}</MenuItem>
          ))}
        </SelectField>
        <SelectField name="level" label="Chức danh" form={form}>
          {levels.map((level, _) => (
            <MenuItem value={level.id}>{level.name}</MenuItem>
          ))}
        </SelectField>
        <InputField name="phone" label="Số điện thoại di động" form={form} />
        <InputField name="ext" label="Số điện thoại nội bộ" form={form} />
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} sm={6} style={{ marginTop: "8px" }}>
            <RadioField
              name="sex"
              label="Giới tính"
              onChange={handleChangeSex}
              value={sex}
              form={form}
            >
              <FormControlLabel value="Mr" control={<Radio />} label="Nam" />
              <FormControlLabel value="Ms" control={<Radio />} label="Nữ" />
            </RadioField>
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <DateField
              name="birthday"
              lable="Ngày sinh nhật"
              format="dd/MM/yyyy"
              value={birthday}
              onChange={handleChangeBirtday}
              form={form}
            />
          </Grid>
        </Grid>

        <Button
          className="dialogButtonSave"
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress color="secondary" className="setting__progress" />
          ) : (
            "Lưu"
          )}
        </Button>
      </form>
    </div>
  );
}

export default SettingForm;
