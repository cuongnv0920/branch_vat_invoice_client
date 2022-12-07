import React from "react";
import PropTypes from "prop-types";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Controller } from "react-hook-form";
import { FormLabel } from "@material-ui/core";

DateField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
};

export function DateField(props) {
  const { form, name, disabled, lable, format } = props;
  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormLabel component="label">{lable}</FormLabel>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format={format}
            margin="normal"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            disabled={disabled}
          />
        </MuiPickersUtilsProvider>
      )}
    ></Controller>
  );
}
