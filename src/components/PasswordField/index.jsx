import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <Controller
        id={name}
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, error },
        }) => (
          <FormControl
            error={invalid}
            fullWidth
            margin="normal"
            variant="outlined"
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              fullWidth
              label={label}
              error={error}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disabled}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}
