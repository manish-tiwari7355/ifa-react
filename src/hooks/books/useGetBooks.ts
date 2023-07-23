import { useQuery } from 'react-query';

import { book } from '@/services/books/books';

export function useBook(payload: any) {
  return useQuery(['book', payload], () => book(), {
    refetchOnWindowFocus: false,
  });
}
