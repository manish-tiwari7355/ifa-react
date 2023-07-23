import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';
const { getSingleEvents } = new AuthServices();
export function useSingleEvents(payload: any) {
  return useQuery(
    ['getSingleEvents', payload],
    () => getSingleEvents(payload),
    {
      refetchOnWindowFocus: false,
      enabled: !!payload?.pathParams?.blogId,
    }
  );
}
