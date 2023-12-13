import { addProduct } from '@/lib/actions';

export default function AddProductPage() {
	return (
		<div className="bg-bgSoft p-5 rounded-lg mt-5">
			<form className="flex flex-wrap justify-between" action={addProduct}>
				<input
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					type="text"
					name="title"
					placeholder="title"
					required
				/>
				<select
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					name="category"
					id="category"
				>
					<option value="general">Choose a category</option>
					<option value="kitchen">Kitchen</option>
					<option value="phone">Phone</option>
					<option value="computer">Computer</option>
				</select>
				<input
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					type="number"
					placeholder="price"
					name="price"
				/>
				<input
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					type="number"
					placeholder="stock"
					name="stock"
				/>
				<input
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					type="text"
					placeholder="color"
					name="color"
				/>
				<input
					className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
					type="text"
					placeholder="size"
					name="size"
				/>
				<textarea
					className="p-7 w-full bg-bgColor text-white border-2 border-gray-600 rounded mb-7"
					name="desc"
					id="desc"
					rows={10}
					placeholder="description"
				></textarea>

				<button type="submit" className="px-7 w-full py-3 bg-teal-600 rounded">
					Submit
				</button>
			</form>
		</div>
	);
}
