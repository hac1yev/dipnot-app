import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 32, 67, 1)',
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '52px',
      color: '#2D2D2B',
      fontWeight: '700',
      lineHeight: '52px',
      '@media (max-width:900px)': {
        fontSize: '36px',
        lineHeight: '40px',
      },
    },
    h2: {
      fontSize: '48px',
      color: '#B8926A',
      fontWeight: '700',
      lineHeight: '44px',
      '@media (max-width:900px)': {
        fontSize: '34px',
        lineHeight: '38px',
      },
    },
    h3: {
      fontSize: '40px',
      color: '#2D2D2B',
      fontWeight: '700',
      lineHeight: '44px',
      '@media (max-width:900px)': {
        fontSize: '28px',
        lineHeight: '34px',
      },
    },
    h4: {
      fontSize: '22px',
      textAlign: 'center',
      fontWeight: '600',
      lineHeight: '30px',
      color: 'rgba(0, 32, 67, 1)',
    },
    h5: {
      fontSize: '19.53px',
      fontWeight: '600',
      lineHeight: '29.29px',
      color: 'rgba(0, 32, 67, 1)',
    },
    h6: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '22px',
      color: '#000',
    },
    subtitle1: {
      color: 'rgba(51, 51, 51, 1)', 
      fontSize: '18px', 
      fontWeight: '500',
      lineHeight: '22px'
    },
    subtitle2: {
      
    },
    subtitle3: {
      fontSize: '12px',
      color: 'rgba(0, 0, 0, 0.44)',
      fontWeight: '400',
      lineHeight: '14px'
    },
  },  
});

export default theme;