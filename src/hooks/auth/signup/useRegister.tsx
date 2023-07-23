import { useMutation } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

const { newAdmissionsRegistration } = new AuthServices();

export function useNewAdmissionsRegistration() {
  return useMutation((payload: any) => newAdmissionsRegistration(payload));
}
