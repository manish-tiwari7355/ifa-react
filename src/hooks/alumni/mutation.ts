import { useMutation } from 'react-query';

import { addAlumni } from '@/services/alumni/addAlumni';

export function useAddAlumni() {
  return useMutation((payload: any) => addAlumni(payload));
}
