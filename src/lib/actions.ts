'use server';
import User from '@/models/user-model';
import { connectToDB } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import Product from '@/models/product-model';

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
		throw new Error('Failed to create user.');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};

export const addProduct = async (formData: FormData) => {
	const { title, desc, price, stock, color, size, category } = Object.fromEntries(formData);
	console.log(category);

	try {
		connectToDB();

		const newProduct = new Product({
			title,
			desc,
			price,
			stock,
			color,
			size,
			category,
		});
		console.log('new Product', newProduct);
		await newProduct.save();
	} catch (error) {
		console.log(error);
		throw new Error('Failed to create product.');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};

export const deleteUser = async (formData: FormData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDB();

		await User.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to delete user.');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};
export const deleteProduct = async (formData: FormData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDB();

		await Product.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to delete product.');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};

type UpdateFields = {
	[key: string]: FormDataEntryValue | undefined;
};

export const updateProduct = async (formData: FormData) => {
	const { id, title, price, stock, color, size, category, desc } = Object.fromEntries(formData);

	try {
		connectToDB();

		const updateFields: UpdateFields = { title, price, stock, color, size, category, desc };

		Object.keys(updateFields).forEach((key) => {
			(updateFields[key] === '' || undefined) && delete updateFields[key];
		});
		console.log(id);
		await Product.findByIdAndUpdate(id, updateFields);
	} catch (error) {
		console.log(error);
		throw new Error('Failed to update product.');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};
