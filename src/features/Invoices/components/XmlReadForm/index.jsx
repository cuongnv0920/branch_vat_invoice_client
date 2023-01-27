import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UploadField } from "components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

XmlReadForm.propTypes = {
  onSubmit: PropTypes.func,
};

function XmlReadForm(props) {
  const schema = yup.object().shape({
    xml: yup.string().required("Vui lòng chọn File hóa đơn .xml"),
  });

  const form = useForm({
    defaultValues: {
      xml: "",
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
        <Typography className="dialogTitle_content">Đọc File .xml</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <UploadField name="xml" label="Tải file" form={form} />

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

export default XmlReadForm;
