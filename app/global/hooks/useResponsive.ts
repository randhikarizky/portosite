// @mui
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

type Props = {
  query: string;
  start: Breakpoint;
  end?: Breakpoint;
};

export default function useResponsive(props: Props) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(props.start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(props.start));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(props.start, props?.end ?? 0)
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(props.start));

  if (props.query === 'up') {
    return mediaUp;
  }

  if (props.query === 'down') {
    return mediaDown;
  }

  if (props.query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key): any => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
