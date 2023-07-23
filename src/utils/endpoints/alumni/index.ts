import Cookies from 'universal-cookie';

import { EndPoint } from '@/types/endpoints';

const cookies = new Cookies();
const alumniEndpoints: EndPoint = {
  addAlumni: {
    uri: '/alumni/add',
    method: 'POST',
    version: '/api',
  },
};

export default alumniEndpoints;
