import { StyledLink } from "@/app/features/landing/presentation/components/peripherals/StyledLink/StyledLinkComponent";
import useResponsive from "@/app/global/hooks/useResponsive";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { SkillAbilities, WorkExperience } from "../interface/resume.interface";
import { Circle } from "@mui/icons-material";

const ResumeComponent = () => {
  const isDesktop = useResponsive({ query: "up", start: "md" });

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
      <Grid container justifyContent="center">
        <Grid item md={8} xs={12}>
          <Grid container rowGap={7.5}>
            <Grid item xs={12}>
              <Stack rowGap={1}>
                <Typography variant="h1" fontFamily="Plus Jakarta Sans">
                  Randhika Rizkyaldi
                </Typography>
                <Typography
                  variant="h4"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight={700}
                >
                  FRONT-END DEVELOPER
                </Typography>
                <Typography
                  variant="h5"
                  fontFamily="Plus Jakarta Sans"
                  fontWeight={500}
                  mt={1}
                >
                  Jakarta |{" "}
                  <StyledLink
                    href="https://wa.me/6287714355354"
                    target="_blank"
                  >
                    +6287714355354
                  </StyledLink>{" "}
                  |{" "}
                  <StyledLink href="mailto:rizkyran.rr@gmail.com">
                    rizkyran.rr@gmail.com
                  </StyledLink>{" "}
                  |{" "}
                  <StyledLink href="https://randhika.net/" target="_blank">
                    randhika.me
                  </StyledLink>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack>
                <Typography
                  variant="body2"
                  textAlign="justify"
                  paragraph
                  sx={{ textIndent: "2.5rem" }}
                >
                  As a Frontend Developer at Alto Network, I already have
                  atleast 3 years work experience in my speciality. Mainly, I
                  used to work on developing and maintaining web apps. I'm
                  fluent in NextJS and TypeScript. For API matters, I'm no
                  stranger with Axios and React-Query. I also love creating
                  custom-built components and functions in order to use them
                  globally. And don't forget to mention, I also entrusted myself
                  for the quality and performance of the web apps I worked on by
                  resolving bugs.
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="justify"
                  paragraph
                  sx={{ textIndent: "2.5rem" }}
                >
                  Other than deadlines, I am also pursuing a Bachelor of
                  Informatics Engineering degree at Universitas Terbuka , where
                  I learn about information systems and computer programming. I
                  have a certification in Full Stack Web Development from Impact
                  Byte, where I gained more skills in HTML5, CSS3, JavaScript,
                  and Node.js. I am fluent in English, as evidenced by my TOEFL
                  score issued by ELSKILL English Course.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  mb={2}
                  fontFamily="Plus Jakarta Sans"
                >
                  Education
                </Typography>
                <Stack rowGap={5}>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700} mb={0.5}>
                        Universitas Terbuka | Bachelor of Informatics
                        Engineering · Mar 2023 — Present
                      </Typography>
                      <Typography variant="body2">
                        Information Systems Major
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700} mb={0.5}>
                        Impact Byte | Bootcamp · March 2021 — July 2021
                      </Typography>
                      <Typography variant="body2">
                        Full-Stack Web Development Major
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack rowGap={1}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700} mb={0.5}>
                        SMK Negeri 1 Cianjur | Highschool Diploma · 2016 — 2019
                      </Typography>
                      <Typography variant="body2">
                        Software Engineering Major
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  mb={2}
                  fontFamily="Plus Jakarta Sans"
                >
                  Skills & Abilities
                </Typography>
                <Box>
                  {SkillAbilities.length > 0 && (
                    <Typography variant="subtitle2">
                      {SkillAbilities.map((d, i) => (
                        <>
                          {d}
                          {i !== d.length && (
                            <Circle
                              sx={{
                                mx: ".5rem",
                                my: "auto",
                                fontSize: ".35rem",
                                opacity: 0.75,
                              }}
                            />
                          )}
                        </>
                      ))}
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  mb={2}
                  fontFamily="Plus Jakarta Sans"
                >
                  Experiences
                </Typography>
                <Stack rowGap={5}>
                  {WorkExperience.map((d) => (
                    <Stack rowGap={2}>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight={700}
                          mb={0.5}
                        >
                          {d.place} | {d.position} · {d.start} —{" "}
                          {d.end !== "" ? d.end : "Present"}
                        </Typography>
                        <Typography variant="caption">
                          {d.stacks.map((d) => d).join(", ")}
                        </Typography>
                      </Box>
                      {d.jobDesk.length > 0 && (
                        <List disablePadding>
                          {d.jobDesk.map((d) => (
                            <ListItem alignItems="center" sx={{ px: 0 }} dense>
                              <ListItemIcon
                                sx={{
                                  width: "1%",
                                }}
                              >
                                <Circle
                                  sx={{
                                    width: "20%",
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={d} />
                            </ListItem>
                          ))}
                        </List>
                      )}
                      {d.projects.length > 0 && (
                        <Typography variant="body2">
                          Contributed in:{" "}
                          {d.projects.map((x, i) => (
                            <>
                              <StyledLink href={`https://${x}`} target="_blank">
                                {x}
                              </StyledLink>
                              {i + 1 !== d.projects.length && (
                                <Circle
                                  sx={{
                                    mx: ".5rem",
                                    my: "auto",
                                    fontSize: ".35rem",
                                    opacity: 0.75,
                                  }}
                                />
                              )}
                            </>
                          ))}
                        </Typography>
                      )}
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeComponent;
