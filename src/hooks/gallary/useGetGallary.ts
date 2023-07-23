import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { getGallaryImages } = new AuthServices();

export function useGetEvents(payload: any) {
  return useQuery(['getEvents', payload], () => getGallaryImages(payload), {
    refetchOnWindowFocus: false,
  });
}