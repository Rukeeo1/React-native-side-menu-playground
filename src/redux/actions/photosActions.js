import Api from '../../config/api';

export const getPhotos = () => async (dispatch) => {
  try {
    const photos = await Api.get('/photos');
    console.log(photos, 'these are photos');
  } catch (error) {
    console.log(error, 'this is error');
  }
};
