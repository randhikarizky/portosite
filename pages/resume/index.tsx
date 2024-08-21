import ResumeComponent from "@/app/features/resume/presentation/components/ResumeComponent";
import HeadComponent from "@/app/global/components/HeadComponent";
import useResponsive from "@/app/global/hooks/useResponsive";
import { ArrowBackOutlined, ArrowUpward, Print } from "@mui/icons-material";
import { Box, Fab, Tooltip } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Resume: NextPage = () => {
  const router = useRouter();
  const isDesktop = useResponsive({ query: "up", start: "md" });

  return (
    <>
      <HeadComponent title="Resume" />
      <Box
        onClick={() => window.print()}
        className="scroll-top"
        sx={{
          position: "fixed",
          bottom: 96,
          right: 32,
          zIndex: "999",
          opacity: isDesktop ? 1 : 0.5,
        }}
      >
        <Tooltip title="Directly print my resume or save it as PDF">
          <Fab color="success" sx={{ height: "50px", width: "50px" }}>
            <Print fontSize="small" />
          </Fab>
        </Tooltip>
      </Box>

      <Box
        onClick={() => router.push("/")}
        className="scroll-top"
        sx={{
          position: "fixed",
          bottom: 159,
          right: 32,
          zIndex: "999",
          opacity: isDesktop ? 1 : 0.5,
        }}
      >
        <Fab color="default" sx={{ height: "50px", width: "50px" }}>
          <ArrowBackOutlined fontSize="small" />
        </Fab>
      </Box>
      <ResumeComponent />
    </>
  );
};

export default Resume;
