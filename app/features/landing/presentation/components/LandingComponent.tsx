import useResponsive from "@/app/global/hooks/useResponsive";
import customShadows from "@/assets/theme/customShadows";
import {
  ArrowOutward,
  GitHub,
  Instagram,
  LinkedIn,
  Description,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { selfTitle } from "../interface/landing.interface";
import { useRouter } from "next/router";
import { StyledLink } from "./peripherals/StyledLink/StyledLinkComponent";

const StyledGrid = styled(Grid)(({ theme }) => ({
  transition: "all .1s ease-in-out",
  borderRadius: theme.spacing(2),
  ".arrow-title": {
    transition: "all .1s ease-in-out",
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2),
    "&:hover": {
      boxShadow: customShadows().primary,
      backgroundColor: alpha("#CDFBF0", 0.2),
      ".arrow-title": {
        transform: "translate(5px, -5px)",
      },
    },
  },
}));

const LandingComponent = () => {
  const isDesktop = useResponsive({ query: "up", start: "md" });
  const router = useRouter();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: "80dvh",
        pt: isDesktop ? "unset" : "5dvh",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: isDesktop ? "fixed" : "flex",
              height: isDesktop ? "80dvh" : "40dvh",
            }}
          >
            <Stack
              sx={{
                height: "100%",
              }}
              justifyContent={{ md: "space-between", sm: "center" }}
            >
              <Box>
                <Typography variant="h2" color="primary.main">
                  {selfTitle.full_name}
                </Typography>
                <Typography variant="h4">{selfTitle.position}</Typography>
                <Typography variant="body1" color="text.disabled" mt={3}>
                  {selfTitle.slogan}
                </Typography>
              </Box>
              <Stack
                direction="row"
                columnGap={2}
                sx={{
                  mt: isDesktop ? "unset" : "1dvh",
                  opacity: 0.75,
                }}
              >
                <IconButton
                  title="Check out my Digital ATS Resume!"
                  size="medium"
                  onClick={() => router.push("/resume")}
                >
                  <Description />
                </IconButton>
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
        <Grid item xs={12} md={6}>
          <Stack rowGap={20}>
            <Box
              sx={{
                padding: isDesktop ? "1rem" : "unset",
              }}
            >
              <Typography variant="h6" mb={2}>
                ABOUT
              </Typography>
              <Stack rowGap={3} color="text.disabled">
                <Typography variant="body2">
                  In 2016, as a kid I decided to challenge myself to deepen my
                  computer skill through the Software Engineering department at
                  my school, SMKN 1 Cianjur and tumbled into the rabbit hole of
                  coding and web development.
                </Typography>
                <Typography variant="body2">
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
                  <StyledLink href="https://www.lenmarc.com/" target="_blank">
                    POS Start-up
                  </StyledLink>
                  , a{" "}
                  <StyledLink href="https://asqi.co.id/" target="_blank">
                    Fintech Start-up
                  </StyledLink>
                  , a{" "}
                  <StyledLink href="https://autopedia.id/id" target="_blank">
                    Big Corporation
                  </StyledLink>
                  , and even one of{" "}
                  <StyledLink href="https://alto.id/" target="_blank">
                    The Biggest Switching Company in Indonesia
                  </StyledLink>
                  .
                </Typography>
                <Typography variant="body2">
                  My main focus in these past months is developing and
                  maintaining a project for my main-job company at{" "}
                  <StyledLink href="https://alto.id/" target="_blank">
                    Alto
                  </StyledLink>
                  . I love making global components and functions as reliable as
                  possible so I don't have to create a same or similiar one in
                  another line of codes and components. I also have a Freelance
                  Front-End Developer role at{" "}
                  <StyledLink href="https://asqi.co.id/" target="_blank">
                    ASQI
                  </StyledLink>{" "}
                  for their{" "}
                  <StyledLink href="https://ergb.co.id/" target="_blank">
                    RGB (Rundown Gantangan Burung)
                  </StyledLink>{" "}
                  project.
                </Typography>
                <Typography variant="body2">
                  When I'm not in front of a PC screen, I usually have a slow
                  walk while listening to music, badminton, hanging out, or
                  maybe practicing guitar.
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  px: isDesktop ? "1rem" : "unset",
                  marginBottom: !isDesktop ? "2rem" : "unset",
                }}
              >
                EXPERIENCE
              </Typography>
              <Stack rowGap={5}>
                <StyledGrid
                  container
                  className="link-grid"
                  onClick={() => window.open("https://alto.id/", "_blank")}
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      JAN 2024 - PRESENT
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography variant="h6" color="primary.main">
                          ALTO Network
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Front-End Developer
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          My journey currently landed in one of The Biggest
                          Switching Company in Indonesia,{" "}
                          <StyledLink href="https://alto.id/" target="_blank">
                            Alto Network
                          </StyledLink>
                          . I feel proud of myself because I'm now part of their
                          amazing teams and family. Something that I could've
                          never imagined before. Here, I'm being trusted to help
                          them maintain and developing a project called{" "}
                          <StyledLink
                            href="https://altoconnect.id/"
                            target="_blank"
                          >
                            Alto Connect
                          </StyledLink>
                          . My main task here is to develop new features
                          according to user requests and resolve existing bugs.
                          I also tend to help team by participating in their
                          Release & Deployment schedule. For the tech stack of
                          this application, we use ReactJS and JavaScript. For
                          API matters, we use Axios. We also created
                          custom-built components & functions in order to use
                          them globally.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="NextJS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Axios"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="JavaScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
                <StyledGrid
                  container
                  className="link-grid"
                  onClick={() =>
                    window.open("https://autopedia.id/id", "_blank")
                  }
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      JUNE 2022 - DEC 2023
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography variant="h6" color="primary.main">
                          Autopedia
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Front-End Developer
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          My work experience here has been very good and without
                          problems. I was assigned to handle their internal
                          administration project, which was integrated with a
                          car sales application called{" "}
                          <StyledLink
                            href="https://caroline.id/"
                            target="_blank"
                          >
                            Caroline.id
                          </StyledLink>
                          . I can't show the project that I handle, because this
                          is intended for the internal administration of{" "}
                          <StyledLink
                            href="https://caroline.id/"
                            target="_blank"
                          >
                            Caroline.id
                          </StyledLink>{" "}
                          itself. Apart from developing, I also ensure that this
                          application runs smoothly with as few bugs as
                          possible. My main task here is to develop new features
                          according to requests and resolve existing bugs. For
                          the tech stack of this application, we use ReactJS and
                          TypeScript. Also, we use Bootstrap as the CSS
                          Framework. For API matters, we use Axios and
                          React-Query.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="NextJS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="React-Query"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Axios"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="TypeScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Bootstrap"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
                <StyledGrid
                  container
                  className="link-grid"
                  onClick={() => window.open("https://asqi.co.id", "_blank")}
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      OCT 2023 - PRESENT
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography variant="h6" color="primary.main">
                          ASQI
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Freelance Front-End Developer
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          Here, I was assigned to develop their project called{" "}
                          <StyledLink href="https://ergb.co.id" target="_blank">
                            RGB
                          </StyledLink>
                          . This project is a web application that functions for
                          event ticket management. There are 2 sides to this
                          application, namely client-side and
                          administrator-side. I am in charge of developing both
                          sides in the Front-End section. For the tech stack of
                          this application, I use ReactJS and TypeScript. Also,
                          I use MUI as the component library. For API matters, I
                          use Axios and React-Query.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="NextJS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="React-Query"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Axios"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="TypeScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Material UI"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
                <StyledGrid
                  container
                  className="link-grid"
                  onClick={() =>
                    window.open("http://www.hexadaya.id/", "_blank")
                  }
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      DEC 2021 - JUNE 2022
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography variant="h6" color="primary.main">
                          HEXA DAYA SOLUSI
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Front-End Developer
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          I work on their project for the Government of Jakarta.
                          I use React.JS, Redux, Axios, & Material UI Framework
                          for this project, I build the app user-friendly so
                          that it's easy to use and mobile-friendly using CSS
                          Responsive Breakpoints. The project is an app that can
                          monitor every government's building in Jakarta's water
                          usage called ECO WATER.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="ReactJS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Redux"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Axios"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="JavaScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Material UI"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
                <StyledGrid
                  container
                  className="link-grid"
                  onClick={() =>
                    window.open("https://www.crowde.co/", "_blank")
                  }
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      JUL 2021 - DEC 2021
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography variant="h6" color="primary.main">
                          CROWDE
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Junior Front-End Developer
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          I dealt with their company-internal React.JS based
                          projects. I also sliced some of their Web Design from
                          UI Design in Figma to React.JS Front-End and I
                          integrated the API to the Front-End. Not just that, I
                          also dealt with a variety of Front-End based bugs and
                          fixed them so that the project ran properly.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="ReactJS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Redux"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Axios"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="JavaScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Bootstrap"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
                <StyledGrid container className="link-grid">
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="overline"
                      color="text.disabled"
                      paragraph={!isDesktop}
                    >
                      JUL 2019 - SEPT 2019
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack rowGap={1}>
                      <Box>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          onClick={() =>
                            window.open("https://www.lenmarc.com/", "_blank")
                          }
                        >
                          LENMARC
                          <ArrowOutward
                            className="arrow-title"
                            fontSize="inherit"
                            sx={{
                              ml: 0.5,
                            }}
                          />
                        </Typography>
                        <Typography variant="body1" color="text.disabled">
                          Junior Front-End Developer & Quality Assurance
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.disabled"
                          paragraph
                          align="justify"
                        >
                          I built their project, an online training app called{" "}
                          <StyledLink
                            href="https://lemtron.id/"
                            target="_blank"
                          >
                            LEMTRON
                          </StyledLink>
                          . I used Laravel & Bootstrap for this project since I
                          only handle the Front-End side. I also tested the
                          project so it can run properly as a Quality Assurance.
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1} flexWrap="wrap">
                        <Chip
                          label="Laravel"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="JavaScript"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                        <Chip
                          label="Bootstrap"
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </StyledGrid>
              </Stack>
            </Box>
            <Typography variant="body2" color="text.disabled" paragraph>
              Sincerely built with{" "}
              <StyledLink href="https://www.nextjs.org" target="_blank">
                NextJS
              </StyledLink>{" "}
              and{" "}
              <StyledLink href="https://www.mui.com" target="_blank">
                Material UI
              </StyledLink>
              . Coded in{" "}
              <StyledLink href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </StyledLink>{" "}
              . Truly inspired by{" "}
              <StyledLink href="https://brittanychiang.com/" target="_blank">
                Brittany Chiang.
              </StyledLink>{" "}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingComponent;
