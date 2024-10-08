//app/libs/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt";
const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            // console.log("Not Inputs");
            throw { error: "No Inputs Found", status: 401 };
          }
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            // console.log("No user found");
            throw { error: "No user found", status: 401 };
          }
          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          if (!passwordMatch) {
            // console.log("Password incorrect");
            throw { error: "Password Incorrect", status: 401 };
          }
          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            image: existingUser.image,
          };
          // console.log(user);
          return user;
        } catch (error) {
          // console.log(error);
          throw { error: "Something went wrong", status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        // console.log(`token:${token} in session`);
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.picture;
      }
      return token;
    },
  },
};

export { authOptions };

// //app/libs/authOptions.js
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import db from "./db";
// import { compare } from "bcrypt";

// const authOptions = {
//   adapter: PrismaAdapter(db),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           // Check if user credentials are Correct
//           if (!credentials?.email || !credentials?.password) {
//             // console.log("Not Inputs");
//             throw { error: "No Inputs Found", status: 401 };
            
//           }
//           //Check if user exists
//           const existingUser = await db.user.findUnique({
//             where: { email: credentials.email },
//           });
//           if (!existingUser) {
//             // console.log("No user found");
//             throw { error: "No user found", status: 401 };
            
            
//           }
//           //Check if Password is correct
//           const passwordMatch = await compare(
//             credentials.password,
//             existingUser.hashedPassword
//           );
//           if (!passwordMatch) {
//             // console.log("Password incorrect");
//             throw { error: "Password Incorrect", status: 401 };
//           }
//           const user = {
//             id: existingUser.id,
//             name: existingUser.name,
//             email: existingUser.email,
//             role: existingUser.role,
//             image: existingUser.image,
//           };
//           // console.log(user);
//           return user;
//         } catch (error) {
//           // console.log(error);
//           throw { error: "Something went wrong", status: 401 };
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, user, token }) {
//       return session;
//     },
//     async jwt({ token, user, account, profile, isNewUser }) {
//       return token;
//     },
//   },
// };

// export { authOptions };