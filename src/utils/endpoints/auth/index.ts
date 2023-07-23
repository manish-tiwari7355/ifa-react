import Cookies from 'universal-cookie';

import { EndPoint } from '@/types/endpoints';

const cookies = new Cookies();
const authEndpoints: EndPoint = {
  accessLogin: {
    uri: '/auth/login',
    method: 'POST',
    version: '/api',
  },
  register: {
    uri: '/contact/create',
    method: 'POST',
    version: '/api',
  },
  newAdmissionsRegistration: {
    uri: '/auth/registeruser',
    method: 'POST',
    version: '/api',
  },
  awards: {
    uri: '/awards',
    method: 'GET',
    version: '/api',
  },
  books: {
    uri: '/book',
    method: 'GET',
    version: '/api',
  },
  jobRegister: {
    uri: '/job/create',
    method: 'POST',
    version: '/api',
  },
  getNews: {
    uri: '/blog',
    method: 'GET',
    version: '/api',
  },
  getEvents: {
    uri: '/blog',
    method: 'GET',
    version: '/api',
  },
  getSingleEvents: {
    uri: `/blog/:blogId`,
    method: 'GET',
    version: '/api',
  },
  getActivities: {
    uri: '/blog',
    method: 'GET',
    version: '/api',
  },
  getTours: {
    uri: '/blog',
    method: 'GET',
    version: '/api',
  },
  accessLogout: {
    uri: '/auth/logout',
    method: 'DELETE',
    version: '/api',
  },
  verify: {
    uri: '/auth/verify',
    method: 'POST',
    version: '/api',
  },
  gallaryImages: {
    uri: '/awards/images',
    method: 'GET',
    version: '/api',
  },
};

export default authEndpoints;
