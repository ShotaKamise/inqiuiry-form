import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { CustomGrid } from "../../common/customMUI";

export const RegisteredStep = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ padding: "10px" }}
        alignItems="center"
        justifyContent="center"
      >
        <CustomGrid item xs={12}>
          <Typography variant={"h6"} sx={{ fontWeight: "bold" }}>
            Your iquiry has been registered.
          </Typography>
        </CustomGrid>
        <CustomGrid item xs={12}>
          <Link href="/inquiries" component={Button}>
            {"Go to list"}
          </Link>
        </CustomGrid>
      </Grid>
    </>
  );
};
