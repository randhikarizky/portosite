// ----------------------------------------------------------------------

export default function Input(theme: any) {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.palette.text.primary,
          '&::placeholder': {
            color: theme.palette.text.secondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16],
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: theme.palette.grey[100],
          borderRadius: `12px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[400],
          },
          '&:hover $notchedOutline': {
            borderColor: theme.palette.text.primary,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: theme.palette.grey[100],
          padding: '15.5px 14px',
          borderRadius: `12px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `12px`,
        },
      },
    },
  };
}
