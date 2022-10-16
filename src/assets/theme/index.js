const theme = {
  color: {
    primaryColor: '#ff385c',
    secendaryColor: '#00848a',
  },
  textColor: {
    primaryColor: '#484848',
    secendaryColor: '#222',
  },
  mixin: {
    boxShdow: `
      transition:  box-shadow 200ms ease;
      &:hover{
        box-shadow: 0 2px 2px rgb(0,0,0,.18);
      }
    `,
  },
};

export default theme;
