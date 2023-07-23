import { EndPoint } from '../../../types/endpoints';

const CommonEndpoints: EndPoint = {
  getTopDevelopers: {
    uri: '/user/getTopDevelopers',
    method: 'GET',
    version: '/api',
  },
};

export default CommonEndpoints;
