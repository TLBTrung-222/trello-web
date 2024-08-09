// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Define the 'trello' property in the type 'CssVarsThemeOptions'
// read here: https://mui.com/material-ui/customization/theming/#typescript
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
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },
    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange
        //     }
        // },
        // dark: {
        //     palette: {
        //         primary: cyan,
        //         secondary: orange
        //     }
        // }
    },
    components: {
        // Theme style overrides: https://mui.com/material-ui/customization/creating-themed-components/
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: 'white',
                    borderWidth: '0.5px',
                    '&:hover': { borderWidth: '1px' }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => {
                    return { color: theme.palette.primary.main, fontSize: '0.875rem' }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        fontSize: '0.825rem',
                        // color: theme.palette.primary.main,
                        // '.MuiOutlinedInput-notchedOutline': {
                        //     borderColor: theme.palette.primary.light
                        // },
                        // '&:hover': {
                        //     '.MuiOutlinedInput-notchedOutline': {
                        //         borderColor: theme.palette.primary.main
                        //     }
                        // },
                        // inspect on chrome, we will see a fieldset element manipulate style
                        '& fieldset': { borderWidth: '0.5px !important' },
                        '&:hover fieldset': { borderWidth: '1px !important' },
                        '&:focus fieldset': { borderWidth: '1px !important' }
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => {
                    return { color: theme.palette.primary.main }
                }
            }
        }
    }
})

export default theme
