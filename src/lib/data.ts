import User from '@/models/user-model';
import { connectToDB } from './utils';
import Product from '@/models/product-model';

export const fetchUsers = async (q: string, page: string) => {
	const regex = new RegExp(q, 'i');
	const ITEMS_PER_PAGE = 10;
	try {
		connectToDB();
		//sends the total number of users on the query result
		const count = await User.find({
			$or: [{ username: { $regex: regex } }, { email: { $regex: regex } }],
		}).countDocuments();

		//this query finds the user whose username or email matches the regular expression
		const users = await User.find({
			$or: [{ username: { $regex: regex } }, { email: { $regex: regex } }],
		})
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (Number(page) - 1));

		return { count, users };
	} catch (error) {
		throw new Error('Failed to fetch users');
	}
};

export const fetchProducts = async (q: string, page: string) => {
	const regex = new RegExp(q, 'i');
	const ITEMS_PER_PAGE = 10;
	try {
		connectToDB();
		//sends the total number of products on the query result
		const count = await Product.find({
			title: { $regex: regex },
		}).countDocuments();

		//this query finds the product whose title  matches the regular expression
		const products = await Product.find({
			title: { $regex: regex },
		})
			.limit(ITEMS_PER_PAGE)
			.skip(ITEMS_PER_PAGE * (Number(page) - 1));

		return { count, products };
	} catch (error) {
		throw new Error('Failed to fetch products');
	}
};
export const fetchUser = async (id: string) => {
	try {
		connectToDB();

		const user = await User.findById(id);

		return user;
	} catch (error) {
		throw new Error('Failed to fetch user');
	}
};
export const fetchProduct = async (id: string) => {
	try {
		connectToDB();

		const product = await Product.findById(id);

		return product;
	} catch (error) {
		throw new Error('Failed to fetch product');
	}
};
