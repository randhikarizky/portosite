import { ReactNode, useEffect, useState } from "react";
import { alpha, styled } from "@mui/material";

const RootStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
}));

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100dvh",
  background: alpha("#CDFBF0", 0.25),
  paddingTop: 8,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    margin: "auto",
    paddingTop: 88,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

type Props = {
  children: ReactNode;
};

const LayoutComponent = (props: Props) => {
  return (
    <RootStyle>
      <MainStyle>{props.children}</MainStyle>
    </RootStyle>
  );
};

export default LayoutComponent;
