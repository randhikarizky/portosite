import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: "none",
  color: "inherit",
  transition: "all .1s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
