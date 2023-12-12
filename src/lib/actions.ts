"use server";
import User from "@/models/user-model";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import Product from "@/models/product-model";

export const addUser = async (formData: FormData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const hashedPassword = await bcrypt.hash(password as string, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create user.");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });

        await newProduct.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create product.");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};
