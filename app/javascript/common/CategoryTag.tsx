import { Chip } from "@mui/material";
import React from "react";

type Prop = {
  category: "item" | "order" | "other";
};

type CategoryColor = "primary" | "secondary" | "error";

// eslint-disable-next-line no-unused-vars
const CategoryColorMap: { [key in Prop["category"]]: CategoryColor } = {
  item: "primary",
  order: "secondary",
  other: "error",
};

const CategoryTag = ({ category }: Prop) => {
  if (!category) {
    return;
  }
  const categoryColor: CategoryColor = CategoryColorMap[category];
  return (
    <Chip
      size="small"
      variant="outlined"
      label={category}
      color={categoryColor}
    />
  );
};

export default CategoryTag;
