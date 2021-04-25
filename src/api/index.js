import axios from 'axios';
import Cookies from 'js-cookie';
// import Cookies from 'js-cookie';

const { REACT_APP_API_URL: API_URL } = process.env;

const getConfig = () => ({ headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` } });

// eslint-disable-next-line max-len
export const handleLogin = async (event, formData, setErrorText, setLoggedIn, setUserRole, setUserId) => {
  event.preventDefault();

  try {
    const response = await axios.post(`${API_URL}/auth`, formData);

    if (response.status === 200) {
      Cookies.set('accessToken', response.data.token);
      setUserId(response.data.userId);
      setUserRole(response.data.userRole);
      setErrorText(null);
      setLoggedIn(true);
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      setErrorText('Bad credentials');
    } else if (error?.response?.data?.code === 'ECONNREFUSED') {
      setErrorText('Database connection error');
    } else {
      setErrorText('Unknown error');
    }
  }
};

export const checkHealth = async (setErrorText, setLoggedIn, setUserRole, setUserId) => {
  const config = getConfig();

  try {
    const response = await axios.get(`${API_URL}/`, config);

    if (response.status === 200) {
      console.log('API OK');

      if (response.data.authenticated) {
        setUserId(response.data.userId);
        setUserRole(response.data.userRole);
        setLoggedIn(true);
      }
    }
  } catch (error) {
    if (typeof error.response === 'undefined') {
      setErrorText('No response from API');
    }
  }
};

export const getData = async () => {
  const config = getConfig();
  const { data } = await axios.get(`${API_URL}/data`, config);

  return data;
};

export const getNominations = async () => {
  const config = getConfig();
  const { data } = await axios.get(`${API_URL}/nominations`, config);

  return data;
};

export const postVotes = async votes => {
  const config = getConfig();

  const response = await axios.post(`${API_URL}/votes`, votes, config);

  console.log(response);
};
