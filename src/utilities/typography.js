import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
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
  ]
})

export default typography