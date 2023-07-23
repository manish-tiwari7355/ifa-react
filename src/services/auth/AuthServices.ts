import Cookies from 'universal-cookie';

import { VerifyParams } from '@/hooks/auth/verify/useVerify.types';

import { callApi } from '@/utils/apiUtils';
import userEndpoints from '@/utils/endpoints/auth';

import { CreateTokenResponse, VerifyResponse } from './AuthServices.types';
const cookies = new Cookies();

class AuthServices {
  public login = async ({ body }: any) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.accessLogin,
      },
      body,
    })
      .then((createTokenResponse) => {
        cookies.set('accessToken', createTokenResponse.accessToken, {
          path: '/',
        });
        cookies.set('refreshToken', createTokenResponse.refreshToken, {
          path: '/',
        });
        localStorage.setItem('user', JSON.stringify(createTokenResponse?.user));
        return createTokenResponse;
      })
      .catch((error) => {
        throw error?.response?.data?.error;
      });
  };

  public verify = async (payload: VerifyParams) => {
    return callApi<VerifyResponse>({
      uriEndPoint: {
        ...userEndpoints.verify,
        headerProps: {
          otptoken: btoa(`${payload.otp}:test:${payload.email}`),
        },
      },
    })
      .then((VerifyResponse) => {
        cookies.set('accessToken', VerifyResponse.accessToken, {
          path: '/',
        });
        cookies.set('refreshToken', VerifyResponse.refreshToken, {
          path: '/',
        });
        return VerifyResponse;
      })
      .catch((error) => {
        throw error?.response?.data?.error;
      });
  };

  public register = async ({ body }: any) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.register,
      },
      body,
    })
      .then((tokenResponse) => {
        return tokenResponse;
      })
      .catch((error) => {
        return error;
      });
  };
  public newAdmissionsRegistration = async ({ body }: any) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.newAdmissionsRegistration,
      },
      body,
    })
      .then((tokenResponse) => {
        return tokenResponse;
      })
      .catch((error) => {
        return error;
      });
  };
  public jobRegister = async ({ body }: any) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.jobRegister,
      },
      body,
    })
      .then((tokenResponse) => {
        return tokenResponse;
      })
      .catch((error) => {
        return error;
      });
  };
  public getNews = async ({ query }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getNews,
      },
      query,
    });
  };
  public getAllBooks = async ({ query }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getAllBooks,
      },
      query,
    });
  };
  public getEvents = async ({ query }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getEvents,
      },
      query,
    });
  };
  public getSingleEvents = async ({ pathParams }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getSingleEvents,
      },
      pathParams,
    });
  };
  public getActivities = async ({ query }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getActivities,
      },
      query,
    });
  };
  public getTours = async () =>
    callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.getTours,
      },
    });

  public logout = async () => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.accessLogout,
        headerProps: {
          Cookie: '',
          Authorization: '',
        },
      },
    });
  };
  public getGallaryImages = async ({ query }) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.gallaryImages,
      },
      query,
    });
  }
}

export default AuthServices;
