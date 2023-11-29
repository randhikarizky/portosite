export default function Chip(theme: any) {
  return {
    MuiChip: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: theme.palette.primary.main,
            background: theme.palette.primary.lighter,
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: theme.palette.secondary.main,
            background: theme.palette.secondary.lighter,
          },
        },
        {
          props: { color: 'info' },
          style: {
            color: theme.palette.info.main,
            background: theme.palette.info.lighter,
          },
        },
        {
          props: { color: 'success' },
          style: {
            color: theme.palette.success.main,
            background: theme.palette.success.lighter,
          },
        },
        {
          props: { color: 'warning' },
          style: {
            color: theme.palette.warning.main,
            background: theme.palette.warning.lighter,
          },
        },
        {
          props: { color: 'error' },
          style: {
            color: theme.palette.error.main,
            background: theme.palette.error.lighter,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          fontWeight: 700,
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
  };
}
