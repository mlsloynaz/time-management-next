import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  secret:"xPjq4nFwfw+Dcb44EFln+ibT7ZMZwm4gjbCmDBQO3pE=",
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnUsers= nextUrl.pathname.startsWith('/settings/users');
      if (isOnUsers) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/settings/users', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;