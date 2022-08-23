import { createTheme } from '@mui/material/styles'
import { blue, amber, grey } from '@mui/material/colors'
import {
    fontMontserrat,
    fontSquadaOne,
    fontNewGroteskSquare,
    fontGraphik,
} from './fonts'

const Theme = createTheme({
    fonts: {
        primary: 'Montserrat',
        secondary: 'Squada One',
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
            ${fontSquadaOne}
            ${fontNewGroteskSquare}
            ${fontGraphik}
            `,
        },
    },
})

Theme.components.MuiButton = {
    styleOverrides: {
        root: {
            fontFamily: 'New Grotesk Square',
            width: '100%',
            maxWidth: '100%',
            justifyContent: 'center',
            background: '#00F07D',
            borderRadius: '1px',
            color: '#0F237C',
            border: '1px solid #0F237C',
            fontSize: '24px',
            py: '8px',
        },
    },
}

Theme.typography.title = {
    display: 'flex',
    fontFamily: Theme.fonts.title,
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.tertiary.darker,
    display: 'inline-block',
    padding: '10px',
    fontWeight: '300',
    fontSize: '30px',
}

Theme.typography.pageTitle = {
    fontFamily: Theme.fonts.title,
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.tertiary.darker,
    padding: '15px 10px 10px',
    fontWeight: '500',
    fontSize: '3em',
    width: '100%',
    textTransform: 'uppercase',
    marginTop: '50px',
    marginBottom: '50px',
}

Theme.typography.cardTitle = {
    fontFamily: Theme.fonts.secondary,
    color: Theme.palette.tertiary.darker,
    margin: '0px 0px 20px',
    fontWeight: '400',
    fontSize: '20px',
}

Theme.typography.articleTitle = {
    fontFamily: Theme.fonts.title,
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.tertiary.darker,
    padding: '15px 10px 10px',
    fontWeight: '500',
    fontSize: '1.5em',
    lineHeight: '1.5em',
    width: '100%',
    textTransform: 'uppercase',
    marginTop: '20px',
    marginBottom: '20px',
}

Theme.typography.articleDate = {
    display: 'block',
    fontFamily: Theme.fonts.body,
    // fontStyle: 'normal',
    fontWeight: 'normal',

    fontSize: '12px',

    [Theme.breakpoints.up('sm')]: {
        fontSize: '13px',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '14px',
    },
    [Theme.breakpoints.up('lg')]: {
        fontSize: '15px',
    },
    [Theme.breakpoints.up('xl')]: {
        fontSize: '16px',
    },

    color: Theme.palette.neutral.darker,
    marginBottom: '0',
}

Theme.typography.colorful = {
    display: 'inline-flex',
    gap: '10px',
    background:
        'linear-gradient(to right, #FF9D00, #FF9D00, #49BA27, #49BA27, #0096ED, #0096ED, #0096ED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'New Grotesk Square',

    fontSize: '30px',
    [Theme.breakpoints.up('sm')]: {
        fontSize: '55px',
    },
    [Theme.breakpoints.up('md')]: {
        fontSize: '63px',
    },
    [Theme.breakpoints.up('lg')]: {
        fontSize: '83px',
    },
    [Theme.breakpoints.up('xl')]: {
        fontSize: '83px',
    },

    fontWeight: '100',
    '> span:nth-child(1)': {
        fontWeight: '300',
    },
    '> span:nth-child(2)': {
        fontWeight: '500',
    },
    '> span:nth-child(3)': {
        fontWeight: '900',
    },
}

export { Theme }
