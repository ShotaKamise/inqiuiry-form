import { Grid, GridSize, Typography, styled } from "@mui/material";

export const LABEL_COL_XS = 5 as GridSize;
export const VALUE_COL_XS = 7 as GridSize;

export const CustomGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LabelTypography = styled(Typography)({
  fontWeight: "bold",
});
