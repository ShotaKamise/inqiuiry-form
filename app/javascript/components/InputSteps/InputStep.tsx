import React from "react";
import { useInputForm } from "../../domain/hooks";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Controller } from "react-hook-form";
import {
  CustomGrid,
  LABEL_COL_XS,
  LabelTypography,
  VALUE_COL_XS,
} from "../../common/customMUI";

type Props = {
  form: ReturnType<typeof useInputForm>;
};

export const InputStep: React.VFC<Props> = ({ form }) => {
  const methods = form.methods;

  return (
    // <Card
    //   sx={{
    //     maxWidth: "60%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     padding: "10px",
    //   }}
    // >
    <form onSubmit={form.onSubmitOnInputStep}>
      <Grid
        container
        spacing={2}
        sx={{ padding: "10px" }}
        alignItems="center"
        justifyContent="center"
      >
        <CustomGrid item xs={12}>
          <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
            Inquiry Form
          </Typography>
        </CustomGrid>
        <CustomGrid item xs={LABEL_COL_XS}>
          <LabelTypography>Name</LabelTypography>
        </CustomGrid>
        <CustomGrid item xs={VALUE_COL_XS}>
          <TextField
            fullWidth
            size="small"
            {...methods.register("name")}
            error={"name" in methods.formState.errors}
            helperText={methods.formState.errors["name"]?.message}
          />
        </CustomGrid>
        <CustomGrid item xs={LABEL_COL_XS}>
          <LabelTypography>Email</LabelTypography>
        </CustomGrid>
        <CustomGrid item xs={VALUE_COL_XS}>
          <TextField
            fullWidth
            size="small"
            {...methods.register("email")}
            error={"email" in methods.formState.errors}
            helperText={methods.formState.errors["email"]?.message}
          />
        </CustomGrid>
        <CustomGrid item xs={LABEL_COL_XS}>
          <LabelTypography>Category</LabelTypography>
        </CustomGrid>
        <Grid item xs={VALUE_COL_XS}>
          <Controller
            name="category"
            control={methods.control}
            defaultValue="item"
            render={({ field }) => (
              <FormControl>
                <RadioGroup row value={field.value} defaultValue="item">
                  <FormControlLabel
                    {...field}
                    value="item"
                    control={<Radio />}
                    label="About Items"
                  />
                  <FormControlLabel
                    {...field}
                    value="order"
                    control={<Radio />}
                    label="About Your Order"
                  />
                  <FormControlLabel
                    {...field}
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>
        <CustomGrid item xs={LABEL_COL_XS}>
          <LabelTypography>Message</LabelTypography>
        </CustomGrid>
        <CustomGrid item xs={VALUE_COL_XS}>
          <TextField
            multiline
            fullWidth
            minRows={5}
            size="small"
            {...methods.register("message")}
            error={"message" in methods.formState.errors}
            helperText={methods.formState.errors["message"]?.message}
          />
        </CustomGrid>
      </Grid>
      <Grid
        container
        sx={{ padding: "10px", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <CustomGrid item xs={12}>
          <LoadingButton
            variant="contained"
            size="medium"
            type="submit"
            loading={form.methods.formState.isSubmitting}
          >
            Confirm
          </LoadingButton>
        </CustomGrid>
      </Grid>
    </form>
    // </Card>
  );
};
