import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  scaleRatio: 4,
  headerFontFamily: [
    "Montserrat",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Montserrat", "Georgia", "serif"],
  includeNormalize: true,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '900',
        '700',
        '500',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '@media screen and (max-width: 1024px){html{font-size:18px}}': {},
    '@media screen and (max-width: 640px){html{font-size:16px}}': {},
    '@media screen and (max-width: 480px){html{font-size:13px}}': {},
  }),
})

export default typography