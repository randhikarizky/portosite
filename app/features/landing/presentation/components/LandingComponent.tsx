import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 700,
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    transition: "all .5s ease-in-out",
    color: theme.palette.primary.main,
  },
}));

const LandingComponent = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: "80dvh",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              position: "fixed",
              height: "80dvh",
            }}
          >
            <Stack
              sx={{
                height: "100%",
              }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h2" color="primary.main">
                  Randhika Rizkyaldi
                </Typography>
                <Typography variant="h4">
                  Experienced Front-End Developer
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={3}>
                  I really love working using NextJS & MaterialUI.
                </Typography>
                {/* <Stack rowGap={2} mt={10}>
                  <Typography variant="body2">ABOUT</Typography>
                  <Typography variant="body2">EXPERIENCE</Typography>
                  <Typography variant="body2">PROJECT</Typography>
                </Stack> */}
              </Box>
              <Stack
                direction="row"
                columnGap={2}
                sx={{
                  opacity: 0.75,
                }}
              >
                <IconButton
                  href="https://www.linkedin.com/in/randhikar"
                  target="_blank"
                  size="medium"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://www.github.com/randhikarizky"
                  target="_blank"
                  size="medium"
                  disableRipple
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/randhikar_"
                  target="_blank"
                  size="medium"
                  disableRipple
                >
                  <Instagram />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Stack rowGap={20}>
            <Stack rowGap={3} color="text.secondary">
              <Typography variant="body1">
                In 2016, I decided to challenge myself to deepen my computer
                skill through the Software Engineering department at my school,
                SMKN 1 Cianjur and tumbled into the rabbit hole of coding and
                web development.
              </Typography>
              <Typography variant="body1">
                Fast-forward to today. Now, I have had the opportunity to gain
                experience and be trusted to be part of an{" "}
                <StyledLink href="http://www.hexadaya.id/" target="_blank  ">
                  Automation System Integration Engineering Company
                </StyledLink>
                , an{" "}
                <StyledLink href="https://www.crowde.co/" target="_blank">
                  Agricultural-Focused Technology and Financial Company
                </StyledLink>
                , a{" "}
                <StyledLink href="https://www.lempos.com/" target="_blank">
                  POS Start-up
                </StyledLink>
                , a{" "}
                <StyledLink href="https://asqi.co.id/" target="_blank">
                  Fintech Start-up
                </StyledLink>
                , and even a{" "}
                <StyledLink href="https://autopedia.id/id" target="_blank">
                  Huge Corporation
                </StyledLink>
                .
              </Typography>
              <Typography variant="body1">
                My main focus in these past months is developing and maintaining
                a project for my main-job company at{" "}
                <StyledLink href="https://autopedia.id/id" target="_blank">
                  Autopedia
                </StyledLink>
                . I also have a Freelance Front-End Developer role at{" "}
                <StyledLink href="https://asqi.co.id/" target="_blank">
                  ASQI
                </StyledLink>{" "}
                for their{" "}
                <StyledLink href="https://ergb.co.id/" target="_blank">
                  RGB (Rundown Gantangan Burung)
                </StyledLink>{" "}
                project.
              </Typography>
              <Typography variant="body1">
                When I'm not in front of a PC screen, I usually have a slow walk
                while listening to music, badminton, hanging out, or maybe
                practicing guitar.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingComponent;
