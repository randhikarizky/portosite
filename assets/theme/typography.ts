export function remToPx(value: number) {
  return Math.round(parseFloat(value.toString()) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

// export function responsiveFontSizes({ sm, md, lg }: any) {
//   return {
//     '@media (min-width:600px)': {
//       fontSize: pxToRem(sm),
//     },
//     '@media (min-width:900px)': {
//       fontSize: pxToRem(md),
//     },
//     '@media (min-width:1200px)': {
//       fontSize: pxToRem(lg),
//     },
//   };
// }

const typography = {
  fontFamily: "Plus Jakarta Sans, Bricolage Grotesque",
  h1: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    "@media (min-width:600px)": {
      fontSize: pxToRem(52),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(58),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(64),
    },
  },
  h2: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    "@media (min-width:600px)": {
      fontSize: pxToRem(40),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(44),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(48),
    },
  },
  h3: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    "@media (min-width:600px)": {
      fontSize: pxToRem(26),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(30),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(32),
    },
  },
  h4: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    "@media (min-width:600px)": {
      fontSize: pxToRem(20),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(24),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(24),
    },
  },
  h5: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    "@media (min-width:600px)": {
      fontSize: pxToRem(19),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(20),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(20),
    },
  },
  h6: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    "@media (min-width:600px)": {
      fontSize: pxToRem(18),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(18),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(18),
    },
  },
  subtitle1: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontFamily: "Plus Jakarta Sans",
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
};

export default typography;
