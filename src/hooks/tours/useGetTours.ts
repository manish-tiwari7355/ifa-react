import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { getTours } = new AuthServices();

export function useGetTours() {
  return useQuery('getTours', () => getTours(), {
    refetchOnWindowFocus: false,
  });
}
