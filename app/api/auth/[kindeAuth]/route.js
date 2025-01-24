import { createKindeAuthHandler } from '@kinde-oss/kinde-auth-nextjs';

export const { GET, POST } = createKindeAuthHandler({
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  issuer: process.env.KINDE_ISSUER_URL,
  redirectUri: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
  logoutRedirectUri: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});
