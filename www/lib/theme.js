const blue = '#07c';
const white = '#fff';
const orange = '#eeae3d';

export default {
  colors: {
    primary: '#0070f3',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  buttons: {
    primary: {
      color: '#000',
      backgroundColor: white,
      border: '1px solid black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    secondary: {
      color: white,
      backgroundColor: '#000',
      border: '1px solid black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    icon: {
      color: '#000',
      backgroundColor: white,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
};
