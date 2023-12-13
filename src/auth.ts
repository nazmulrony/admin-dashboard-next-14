import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./lib/utils";
import User from "./models/user-model";
import bcrypt from "bcrypt";

//function to fetch the user from DB
const login = async (credentials: Partial<Record<string, unknown>>) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials?.username });

        if (!user) throw new Error("Wrong credentials");

        const isPasswordCorrect = await bcrypt.compare(
            credentials?.password as string,
            user?.password
        );

        if (!isPasswordCorrect) {
            throw new Error("Wrong credentials");
        }

        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login!");
    }
};

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
});
