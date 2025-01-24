import { handleAuth, getUser } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();

export function getKindeServerSession() {
  return {
    async getUser() {
      const user = getUser();
      return user || null;
    },
  };
}
