import { timeStamp } from 'console';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		phone: {
			type: String,
		},
		address: { type: String },
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
