import { Dimensions } from 'react-native';

const colors = {
  black: '#000000',
  blue: '#002B55',
  blueLigth: '#085BAC',
  blue100: '#4099EF',
  green: '#A6CB42',
  greenTransparent: '#79a70042',
  greenDeep: '#83B403',
  greenLight: '#dbfa88',
  grey100: '#D8D8D8',
  grey200: '#F4F4F4',
  grey: '#EBEBEB',
  greyDark: '#9B9B9B',
  greyLight: '#E5E5E5',
  pink: '#E8357F',
  pinkDeep: '#AD0048',
  purshBlue: '#1369BE',
  purshBlueDeep: '#002B55',
  textColor: '#1A1A1A',
  white: '#ffffff',
  nearWhite: '#F7F7F7',
  red: '#FF4A95',
  redDeep: '#AD0048',
};

const API_URL = 'https://jsonplaceholder.typicode.com/';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default {
  colors,
  API_URL,
  screenHeight,
  screenWidth,
};
