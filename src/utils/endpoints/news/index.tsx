import { EndPoint } from '../../../types/endpoints';

const getNews: EndPoint = {
  getCategory: {
    uri: '/news',
    method: 'GET',
    version: '/api',
  },
};

export default getNews;
