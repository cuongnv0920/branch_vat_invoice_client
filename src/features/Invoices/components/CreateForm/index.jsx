import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { InputField } from "components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

CreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateForm(props) {
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập Tên phòng/ ban."),
    code: yup.string().required("Vui lòng nhập Mã phòng/ ban."),
    sort: yup.string().required("Vui lòng nhập Số sắp xếp."),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      code: "",
      sort: 0,
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
      <div className="createRoom__title dialogTitle">
        <Typography className="dialogTitle_content">Thêm hóa đơn</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} sm={6}>
            <InputField name="seller" label="Tên đơn vị" form={form} />
          </Grid>
          <Grid item xs={6} md={6} sm={6}>
            <InputField name="seller" label="Tên đơn vị" form={form} />
          </Grid>
        </Grid>
        <Button
          className="dialogButtonSave"
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress className="createRoom__progress" />
          ) : (
            "Lưu"
          )}
        </Button>
      </form>
    </div>
  );
}

export default CreateForm;
