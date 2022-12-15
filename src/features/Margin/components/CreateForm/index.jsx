import {
  Button,
  LinearProgress,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Input, SelectField } from "../../../../components/inputField";
import "./styles.scss";

CreateForm.propTypes = {
  onSubmit: PropTypes.func,
};
const currencys = [
  "USD",
  "USD(10-20)",
  "USD(1-2-5)",
  "EUR",
  "GBP",
  "HKD",
  "CHF",
  "JPY",
  "THB",
  "AUD",
  "CAD",
  "SGD",
  "SEK",
  "LAK",
  "DKK",
  "NOK",
  "CNY",
  "RUB",
  "NZD",
  "KRW",
];

function CreateForm(props) {
  const schema = yup.object().shape({
    currency: yup.string().required("Vui lòng chọn mã ngoại tệ."),
    buyCash: yup.string().required("Vui lòng nhập biên độ mua tiền mặt."),
    buyTransfer: yup
      .string()
      .required("Vui lòng nhập biên độ mua chuyển khoản."),
    selling: yup.string().required("Vui lòng nhập biên độ giá bán."),
  });

  const form = useForm({
    defaultValues: {
      currency: "",
      buyCash: "",
      buyTransfer: "",
      selling: "",
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
    <div className="createMargin">
      {isSubmitting && <LinearProgress className="createMargin__progress" />}

      <div className="createMargin__title dialogTitle">
        <Typography className="dialogTitle_content">
          Thêm biên độ tỷ giá
        </Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SelectField name="currency" label="Mã ngoại thệ" form={form}>
          {currencys.map((currency, _) => (
            <MenuItem value={currency}>{currency}</MenuItem>
          ))}
        </SelectField>
        <Input name="buyCash" label="Mua tiền mặt (-)" form={form} />
        <Input name="buyTransfer" label="Mua chuyển khoản (-)" form={form} />
        <Input name="selling" label="Bán (+)" form={form} />
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
