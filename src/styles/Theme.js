import { createTheme } from '@mui/material/styles'
import { blue, amber, grey } from '@mui/material/colors'
import {
    fontMontserrat,
    fontSquadOne,
    fontNewGroteskSquare,
    fontGraphik,
} from './fonts'

const Theme = createTheme({
    fonts: {
        primary: 'Montserrat',
        secundary: 'Squada One',
        title: 'New Grotesk Square',
        body: 'Graphik',
    },
    palette: {
        mode: 'light',

        // https://gka.github.io/palettes/#/5|s|00f07d,00dc5f,00b437|ffffe0,ff005e,93003a|1|1
        primary: {
            lighter: '#00f07d',
            light: '#03e169',
            main: '#03d257',
            dark: '#02c347',
            darker: '#00b437',
            contrastText: '#000000',
        },

        // https://gka.github.io/palettes/#/5|s|ffe13c,ffc800,ff9800|ffffe0,ff005e,93003a|1|1
        secondary: {
            lighter: '#ffe13c',
            light: '#ffd025',
            main: '#ffbe13',
            dark: '#ffac04',
            darker: '#ff9800',

            contrastText: '#000000',
        },

        // https://gka.github.io/palettes/#/5|s|00c8f5,0073ff,0f237d|ffffe0,ff005e,93003a|1|1
        tertiary: {
            lighter: '#00c8f5',
            light: '#2598f0',
            main: '#1f6dd6',
            dark: '#1646ae',
            darker: '#0f237d',
            contrastText: '#ffffff',
        },

        neutral: {
            lighter: grey['100'],
            light: grey['200'],
            main: grey['300'],
            dark: grey['400'],
            darker: grey['500'],
            contrastText: grey['900'],
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            ${fontMontserrat}
            ${fontSquadOne}
            ${fontNewGroteskSquare}
            ${fontGraphik}
            `,
        },
    },
})

Theme.typography.title = {
    display: 'flex',
    fontFamily: Theme.fonts.title,
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.tertiary.darker,
    display: 'inline-block',
    padding: '10px',
    fontWeight: '300',
    fontSize: '24px',
}

export { Theme }
