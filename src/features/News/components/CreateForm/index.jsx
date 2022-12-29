import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControlLabel,
  Grid,
  LinearProgress,
  MenuItem,
  Radio,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  CKEditorField,
  Input,
  RadioField,
  SelectField,
  UploadField,
} from "../../../../components/inputField";
import { TextareaField } from "../../../../components/inputField/TextareaField";

CreateForm.propTypes = {
  onSubmit: PropTypes.func,
};

function CreateForm(props) {
  const [status, setStatus] = useState("no");
  const [type, setType] = useState("images/new.gif");

  const schema = yup.object().shape({
    title: yup.string().required("Vui lòng nhập tiêu đề bài viết."),
    type: yup.string().required("Vui lòng đặc tính bài viết."),
  });

  const form = useForm({
    defaultValues: {
      title: "",
      type: type,
      file1: "",
      file2: "",
      code: "",
      status: status,
      command: "",
      content: "",
    },

    resolver: yupResolver(schema),
  });

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="createNews">
      {isSubmitting && <LinearProgress className="createNews__progress" />}

      <div className="createNews__title dialogTitle">
        <Typography className="dialogTitle_content">Thêm bài viết</Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Input name="title" label="Tiêu đề" form={form} />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Input name="code" label="Số văn bản" form={form} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <UploadField name="file1" form={form} />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <UploadField name="file2" form={form} />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <SelectField
              name="type"
              onChange={handleChangeType}
              label="Đặc tính"
              form={form}
            >
              <MenuItem value="images/new.gif">New</MenuItem>
              <MenuItem value="images/hot.gif">Hot</MenuItem>
              <MenuItem value="images/khan.gif">Khẩn</MenuItem>
            </SelectField>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <RadioField
              name="status"
              label="Thông tin nổi bật"
              onChange={handleChangeStatus}
              value={status}
              form={form}
            >
              <FormControlLabel value="no" label="Không" control={<Radio />} />
              <FormControlLabel value="yes" label="Có" control={<Radio />} />
            </RadioField>
          </Grid>
        </Grid>

        <TextareaField
          name="command"
          placeholder="Ý kiến chỉ đạo..."
          form={form}
        />

        <CKEditorField name="content" label="Nội dung bài viết:" form={form} />

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
