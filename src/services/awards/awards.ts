import { callApi } from '@/utils/apiUtils';
import userEndpoints from '@/utils/endpoints/auth';

export const awards = async ({ query }) => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.awards,
    },
    query,
  });
};
