export const GET_COUNTRIES = 'GET_COUNTRIES';

const API_URL = 'https://636e1a5eb567eed48ad32882.mockapi.io/Countries';

export const getCountries = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COUNTRIES,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};
