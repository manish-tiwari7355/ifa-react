import { callApi } from '@/utils/apiUtils';
import alumniEndpoints from '@/utils/endpoints/alumni';

export const addAlumni = async ({ body }) => {
  return callApi({
    uriEndPoint: {
      ...alumniEndpoints.addAlumni,
    },
    body,
  });
};
