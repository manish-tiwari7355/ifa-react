import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { getActivities } = new AuthServices();

export function useActivities(payload: any) {
  return useQuery(['getActivities', payload], () => getActivities(payload), {
    refetchOnWindowFocus: false,
  });
}
