const shared = {
  borderRadius: '4px',
};

export const light = {
  isDarkMode: false,
  bg: 'rgb(255, 255, 250)',
  primary: '#000',
  secondary: '#6D6D6D',
  link: '#0076ff',
  boxShadow: '3px 3px 20px 0px rgba(0, 0, 0, 0.1)',
  boxShadowHover: '3px 3px 25px 0px rgba(0, 0, 0, 0.3)',
  workImgBoxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.2)',
  modalColor: '#fff',
  ...shared,
};

export const dark = {
  isDarkMode: true,
  bg: '#001E32',
  primary: '#FFF',
  secondary: '#BEBEBE',
  link: 'hsl(206.7, 100%, 70%)',
  boxShadow: '3px 3px 20px 0px rgba(255, 255, 255, 0.1)',
  boxShadowHover: '3px 3px 25px 0px rgba(255, 255, 255, 0.3)',
  workImgBoxShadow: '0px 0px 35px 0px rgba(255, 255, 255, 0.3)',
  modalColor: '#333',
  ...shared,
};
