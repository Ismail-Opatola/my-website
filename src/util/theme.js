import { red, blueGrey } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"

import "../styles/index.scss"

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#100E17",
      // main: "#303336",
    },
    secondary: {
      main: "#ccc",
    },
    tertiary: {
      main: fade("#ccc", 0.5),
    },
  },
  lighteriDark: {
    main: "#1F2123",
  },
  tert: {
    main: "#483",
  },
  typography: {
    useNextVariants: true,
  },
  error: {
    main: red.A400,
  },
  background: {
    default: "#fff",
  },
})

theme = responsiveFontSizes(theme)

export default theme
