// ----------------------------------------------------------------------

export default function Tooltip(theme: any) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.palette.background.paper,
          background: theme.palette.grey[700],
        },
      },
    },
  };
}
