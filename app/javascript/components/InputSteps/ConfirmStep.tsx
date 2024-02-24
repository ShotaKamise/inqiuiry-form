import React from "react";
import { useInputForm } from "../../domain/hooks";
import { Button, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  CustomGrid,
  LABEL_COL_XS,
  LabelTypography,
  VALUE_COL_XS,
} from "../../common/customMUI";

type Props = {
  form: ReturnType<typeof useInputForm>;
};

export const ConfirmStep: React.VFC<Props> = ({ form }) => {
  const methods = form.methods;
  const values = methods.getValues();

  return (
    <>
      {/* <Card
        sx={{
          maxWidth: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      > */}
      <form onSubmit={form.onSubmitOnConfirmStep}>
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
            {values.name}
          </CustomGrid>
          <CustomGrid item xs={LABEL_COL_XS}>
            <LabelTypography>Email</LabelTypography>
          </CustomGrid>
          <CustomGrid item xs={VALUE_COL_XS}>
            {values.email}
          </CustomGrid>
          <CustomGrid item xs={LABEL_COL_XS}>
            <LabelTypography>Category</LabelTypography>
          </CustomGrid>
          <CustomGrid item xs={VALUE_COL_XS}>
            {values.category}
          </CustomGrid>
          <CustomGrid item xs={LABEL_COL_XS}>
            <LabelTypography>Message</LabelTypography>
          </CustomGrid>
          <CustomGrid item xs={VALUE_COL_XS}>
            {values.message}
          </CustomGrid>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ padding: "10px", display: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <CustomGrid item xs={12}>
            <Button
              sx={{ marginRight: "10px" }}
              variant="outlined"
              size="medium"
              onClick={form.onBackStep}
            >
              Back
            </Button>
            <LoadingButton
              variant="contained"
              size="medium"
              type="submit"
              loading={form.methods.formState.isSubmitting}
            >
              Submit
            </LoadingButton>
          </CustomGrid>
        </Grid>
      </form>
      {/* </Card> */}
    </>
  );
};
