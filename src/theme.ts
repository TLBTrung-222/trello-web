import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Define the 'trello' property in the type 'CssVarsThemeOptions'
declare module '@mui/material/styles' {
    interface CssVarsThemeOptions {
        trello?: {
            appBarHeight?: string
            boardBarHeight?: string
        }
    }
    // allow configuration using `createTheme`
    interface Theme {
        trello: {
            appBarHeight: string
            boardBarHeight: string
        }
    }
}

// A custom theme for this app
const theme = extendTheme({
    // define custom property for our app
    trello: {
        appBarHeight: '48px',
        boardBarHeight: '58px'
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange
            }
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange
            }
        }
    }
    // ...other properties
})

export default theme
