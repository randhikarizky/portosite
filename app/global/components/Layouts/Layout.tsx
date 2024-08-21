import { ReactNode, useEffect, useState } from "react";
import { alpha, styled } from "@mui/material";
import { useRouter } from "next/router";

const RootStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  overflow: "hidden",
}));

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100dvh",
  paddingTop: 8,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    margin: "auto",
    paddingTop: "10dvh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

type Props = {
  children: ReactNode;
};

const LayoutComponent = (props: Props) => {
  const router = useRouter();

  return (
    <RootStyle>
      <MainStyle
        sx={{
          background: router.pathname.includes("resume")
            ? "white"
            : alpha("#CDFBF0", 0.25),
          color: router.pathname.includes("resume") ? "black" : "unset",
        }}
      >
        {props.children}
      </MainStyle>
    </RootStyle>
  );
};

export default LayoutComponent;
