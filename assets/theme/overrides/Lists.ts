export default function ListItem(theme: any) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.lighter,
            '&:hover': {
              color: theme.palette.primary.dark,
              backgroundColor: theme.palette.primary.lighter,
            },
            '& .MuiListItemIcon-root': {
              color: theme.palette.primary.dark,
              backgroundColor: theme.palette.primary.lighter,
            },
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.dark,
            '& .MuiListItemIcon-root': {
              color: theme.palette.primary.light,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.palette.grey[900],
        },
      },
    },
  };
}
