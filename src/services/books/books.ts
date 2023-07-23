import { callApi } from '@/utils/apiUtils';
import userEndpoints from '@/utils/endpoints/auth';

export const book = async () => {
  return callApi({
    uriEndPoint: {
      ...userEndpoints.book,
    },
  });
};
