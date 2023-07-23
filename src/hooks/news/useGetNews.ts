import { useQuery } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { getNews } = new AuthServices();

export function useGetNews(payload: any) {
  return useQuery(['getNews', payload], () => getNews(payload), {
    refetchOnWindowFocus: false,
  });
}
