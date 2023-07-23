import { useMutation } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { login } = new AuthServices();

export function useLogin() {
  return useMutation((payload: any) => login(payload));
}
