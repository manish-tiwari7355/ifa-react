import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { getEvents } = new AuthServices();

export function useGetEvents(payload: any) {
  return useQuery(['getEvents', payload], () => getEvents(payload), {
    refetchOnWindowFocus: false,
  });
}
