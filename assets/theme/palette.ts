import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------
declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#EEF4F8',
  200: '#DDE9F2',
  300: '#BECCDA',
  400: '#98A6B6',
  500: '#697586',
  600: '#4C5B73',
  700: '#344360',
  800: '#212E4D',
  900: '#141F40',
  500_8: alpha('#697586', 0.08),
  500_12: alpha('#697586', 0.12),
  500_16: alpha('#697586', 0.16),
  500_24: alpha('#697586', 0.24),
  500_32: alpha('#697586', 0.32),
  500_48: alpha('#697586', 0.48),
  500_56: alpha('#697586', 0.56),
  500_80: alpha('#697586', 0.8),
};

const PRIMARY = {
  lighter: "#CDFBF0",
  light: "#68E7DD",
  main: "#0FA3B1",
  dark: "#07617F",
  darker: "#023354",
  contrastText: "#fff",
};
const INFO = {
  lighter: "#D7E2FF",
  light: "#87A3FF",
  main: "#385FFF",
  dark: "#1C34B7",
  darker: "#0A177A",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#EDFBCF",
  light: "#B4EA6E",
  main: "#62BA16",
  dark: "#36850B",
  darker: "#195904",
  contrastText: "#fff",
};
const WARNING = {
  lighter: "#FFFBCC",
  light: "#FFF066",
  main: "#FFE100",
  dark: "#B79D00",
  darker: "#7A6500",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#FFE8D3",
  light: "#FFA97A",
  main: "#FF4F23",
  dark: "#B71A11",
  darker: "#7A0611",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, GREY[0]),
  info: createGradient(INFO.light, GREY[0]),
  success: createGradient(SUCCESS.light, GREY[0]),
  warning: createGradient(WARNING.light, GREY[0]),
  error: createGradient(ERROR.light, GREY[0]),
};

const GRADIENTS_WHITE = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  purple: ['#5E35B1', '#8A62D0', '#AD86E7', '#CFB1F7'],
  blue: ['#1E88E5', '#53AEEF', '#76C8F7', '#A4E1FC'],
  green: ['#00E676', '#3CF086', '#63F791', '#97FCAD'],
  yellow: ['#FFE57F', '#FFED9F', '#FFF2B2', '#FFF7CB'],
  orange: ['#FFAB91', '#FFC5AC', '#FFD6BD', '#FFE6D3'],
};

const palette = {
  common: { black: '#000', white: '#fff' },
  neutral: { main: '#fff', contrastText: GREY[800] },
  primary: { ...PRIMARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  gradients_white: GRADIENTS_WHITE,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200],
    primary: PRIMARY.lighter,
    info: INFO.lighter,
    success: SUCCESS.lighter,
    error: ERROR.lighter,
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
