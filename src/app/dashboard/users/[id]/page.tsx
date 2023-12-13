import { updateUser } from '@/lib/actions';
import { fetchUser } from '@/lib/data';
import Image from 'next/image';

export default async function SingleUserPage({ params }: { params: { id: string } }) {
	const { id } = params;
	const user = await fetchUser(id);
	return (
		<div className="flex gap-12 mt-5">
			<div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft h-max">
				<div className="w-full h-72 rounded-lg relative overflow-hidden">
					<Image src={user?.img || '/avatar.jpg'} alt="" fill className="object-cover" />
				</div>
				{user?.username}
			</div>
			<div className="flex-[3] bg-bgSoft p-5 rounded-lg">
				<form className="flex flex-col" action={updateUser}>
					<input type="hidden" name="id" value={user?._id} />
					<label> Username</label>
					<input
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						type="text"
						name="username"
						defaultValue={user?.username}
						placeholder="enter username"
					/>
					<label> Email</label>
					<input
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						type="email"
						name="email"
						defaultValue={user?.email}
						placeholder="enter email"
					/>
					<label> Password</label>
					<input
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						type="password"
						name="password"
						placeholder="enter password"
					/>
					<label> Phone</label>
					<input
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						type="text"
						defaultValue={user?.phone}
						name="phone"
						placeholder="ex +1264595"
					/>

					<label> Address</label>
					<textarea
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						name="address"
						placeholder="enter your address"
						defaultValue={user?.address}
					></textarea>
					<label> IsAdmin</label>
					<select
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						name="isAdmin"
						id="isAdmin"
					>
						<option selected={user?.isAdmin === 'true'} value="true">
							Yes
						</option>
						<option selected={user?.isAdmin === 'false'} value="false">
							No
						</option>
					</select>
					<label> IsActive</label>
					<select
						className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
						name="isActive"
						id="isActive"
					>
						<option selected={user?.isActive === 'true'} value="true">
							Yes
						</option>
						<option selected={user?.isActive === 'false'} value="false">
							No
						</option>
					</select>
					<button className="px-7 w-full py-3 bg-teal-600 rounded mt-5">Update</button>
				</form>
			</div>
		</div>
	);
}
