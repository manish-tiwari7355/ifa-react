import { useMutation } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { jobRegister } = new AuthServices();

export function useJobRegister() {
  return useMutation((payload: any) => jobRegister(payload));
}
