import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

// const userRole = async (parent: any, args: any, ctx: any) => {
//   const user = await ctx.prisma.user.findOne({ where: { id: parent.id } });
//   console.log(user)
//   return user.role;
// };

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, token, user }) {   // https://next-auth.js.org/tutorials/role-based-login-strategy
      const databaseUser = await prisma.user.findUnique({ where: { id: user.id } });
      if (session.user) {                       // https://stackoverflow.com/questions/73279092/type-issue-when-adding-roles-to-nextauth-js-with-google-provider
        session.user.id = user.id;
        session.user.role = databaseUser?.role;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    // ...add more providers here
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
