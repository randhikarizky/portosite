import customShadows from "@/assets/theme/customShadows";
import { ArrowOutward, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
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

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 700,
  textDecoration: "none",
  color: "inherit",
  transition: "all .1s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: "all .1s ease-in-out",
  borderRadius: theme.spacing(2),
  ".arrow-title": {
    transition: "all .1s ease-in-out",
  },
  "&:hover": {
    boxShadow: customShadows().primary,
    backgroundColor: alpha("#CDFBF0", 0.2),
    ".arrow-title": {
      transform: "translate(5px, -5px)",
    },
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
                <Typography variant="body1" color="text.disabled" mt={3}>
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
            <Stack rowGap={3} color="text.disabled">
              <Typography variant="body1">
                In 2016, as a kid I decided to challenge myself to deepen my
                computer skill through the Software Engineering department at my
                school, SMKN 1 Cianjur and tumbled into the rabbit hole of
                coding and web development.
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
                <StyledLink href="https://www.lenmarc.com/" target="_blank">
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
              <Typography variant="body1">
                When I'm not in front of a PC screen, I usually have a slow walk
                while listening to music, badminton, hanging out, or maybe
                practicing guitar.
              </Typography>
            </Stack>
            <Stack rowGap={5}>
              <StyledGrid
                container
                className="link-grid"
                onClick={() => window.open("https://autopedia.id/id", "_blank")}
              >
                <Grid item xs={4}>
                  <Typography variant="overline" color="text.disabled">
                    JUNE 2022 - PRESENT
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" color="primary.main">
                        Autopedia
                        <ArrowOutward
                          className="arrow-title"
                          fontSize="inherit"
                          sx={{
                            ml: 0.5,
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.disabled">
                        Front-End Developer
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        paragraph
                      >
                        So far, my work experience here has been very good and
                        without problems. I was assigned to handle their
                        internal administration project, which was integrated
                        with a car sales application called{" "}
                        <StyledLink href="https://caroline.id/" target="_blank">
                          Caroline.id
                        </StyledLink>
                        . I can't show the project that I handle, because this
                        is intended for the internal administration of{" "}
                        <StyledLink href="https://caroline.id/" target="_blank">
                          Caroline.id
                        </StyledLink>{" "}
                        itself. Apart from developing, I also ensure that this
                        application runs smoothly with as few bugs as possible.
                        My main task here is to develop new features according
                        to requests and resolve existing bugs. For the tech
                        stack of this application, we use ReactJS and
                        TypeScript. Also, we use Bootstrap as the CSS Framework.
                        For API matters, we use Axios and React-Query.
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
                <Grid item xs={4}>
                  <Typography variant="overline" color="text.disabled">
                    OCT 2023 - PRESENT
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" color="primary.main">
                        ASQI
                        <ArrowOutward
                          className="arrow-title"
                          fontSize="inherit"
                          sx={{
                            ml: 0.5,
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.disabled">
                        Freelance Front-End Developer
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        paragraph
                      >
                        Here, I was assigned to develop their project called{" "}
                        <StyledLink href="https://ergb.co.id" target="_blank">
                          RGB
                        </StyledLink>
                        . This project is a web application that functions for
                        event ticket management. There are 2 sides to this
                        application, namely client-side and administrator-side.
                        I am in charge of developing both sides in the Front-End
                        section. For the tech stack of this application, I use
                        ReactJS and TypeScript. Also, I use MUI as the component
                        library. For API matters, I use Axios and React-Query.
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
                onClick={() => window.open("http://www.hexadaya.id/", "_blank")}
              >
                <Grid item xs={4}>
                  <Typography variant="overline" color="text.disabled">
                    DEC 2021 - JUNE 2022
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" color="primary.main">
                        HEXA DAYA SOLUSI
                        <ArrowOutward
                          className="arrow-title"
                          fontSize="inherit"
                          sx={{
                            ml: 0.5,
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.disabled">
                        Front-End Developer
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        paragraph
                      >
                        I work on their project for the Government of Jakarta. I
                        use React.JS, Redux, Axios, & Material UI Framework for
                        this project, I build the app user-friendly so that it's
                        easy to use and mobile-friendly using CSS Responsive
                        Breakpoints. The project is an app that can monitor
                        every government's building in Jakarta's water usage
                        called ECO WATER.
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
                onClick={() => window.open("https://www.crowde.co/", "_blank")}
              >
                <Grid item xs={4}>
                  <Typography variant="overline" color="text.disabled">
                    JUL 2021 - DEC 2021
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" color="primary.main">
                        CROWDE
                        <ArrowOutward
                          className="arrow-title"
                          fontSize="inherit"
                          sx={{
                            ml: 0.5,
                          }}
                        />
                      </Typography>
                      <Typography variant="body2" color="text.disabled">
                        Junior Front-End Developer
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        paragraph
                      >
                        I dealt with their company-internal React.JS based
                        projects. I also sliced some of their Web Design from UI
                        Design in Figma to React.JS Front-End and I integrated
                        the API to the Front-End. Not just that, I also dealt
                        with a variety of Front-End based bugs and fixed them so
                        that the project ran properly.
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
                <Grid item xs={4}>
                  <Typography variant="overline" color="text.disabled">
                    JUL 2019 - SEPT 2019
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography
                        variant="subtitle1"
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
                      <Typography variant="body2" color="text.disabled">
                        Junior Front-End Developer & Quality Assurance
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        paragraph
                      >
                        I built their project, an online training app called{" "}
                        <StyledLink href="https://lemtron.id/" target="_blank">
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
