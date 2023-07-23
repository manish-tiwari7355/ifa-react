import { EndPoint } from '../../../types/endpoints';

const singleCategoryEndpoints: EndPoint = {
  getSingleCategory: {
    uri: '/Category/`$(id)',
    method: 'GET',
    version: '/api',
  },
};

export default singleCategoryEndpoints;
