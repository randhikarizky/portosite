import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ScrollTop(props: Props) {
  const { window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        className="scroll-top"
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 32, right: 32, zIndex: "999" }}
      >
        <Fab color="default" sx={{ height: "50px", width: "50px" }}>
          <ArrowUpward fontSize="small" />
        </Fab>
      </Box>
    </Fade>
  );
}
