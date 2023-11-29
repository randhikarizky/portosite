export default function Avatar(theme: any) {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          background: theme.palette.primary.light,
        },
      },
    },
  };
}
