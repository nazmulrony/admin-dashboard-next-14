import User from "@/models/user-model";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string) => {
    const regex = new RegExp(q, "i");
    try {
        connectToDB();
        //this query finds the user whose username or email matches the regular expression
        const users = await User.find({
            $or: [
                { username: { $regex: regex } },
                { email: { $regex: regex } },
            ],
        });
        return users;
    } catch (error) {
        throw new Error("Failed to fetch users");
    }
};
