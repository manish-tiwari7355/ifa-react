import { useQuery } from 'react-query';

import { awards } from '@/services/awards/awards';

export function useAwards(payload: any) {
  return useQuery(['awards', payload], () => awards(payload), {
    refetchOnWindowFocus: false,
  });
}
