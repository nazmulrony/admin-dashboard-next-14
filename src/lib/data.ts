import User from "@/models/user-model";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fetch users");
    }
};
