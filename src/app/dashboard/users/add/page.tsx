import { addUser } from "@/lib/actions";

export default function AddUserPage() {
    return (
        <div className="bg-bgSoft p-5 rounded-lg mt-5">
            <form className="flex flex-wrap justify-between" action={addUser}>
                <input
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    type="text"
                    name="username"
                    placeholder="username"
                    required
                />
                <input
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                />
                <input
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <input
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    type="text"
                    name="phone"
                    placeholder="phone"
                    required
                />
                <select
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    name="isAdmin"
                    id="isAdmin"
                >
                    <option value="false">Is Admin?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <select
                    className="p-7 bg-bgColor text-white border-2 border-gray-600 rounded mb-7 w-[45%]"
                    name="isActive"
                    id="isActive"
                >
                    <option value="true">Is Active?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <textarea
                    className="p-7 w-full bg-bgColor text-white border-2 border-gray-600 rounded mb-7"
                    name="address"
                    id="address"
                    rows={16}
                    placeholder="address"
                ></textarea>

                <button
                    type="submit"
                    className="px-7 w-full py-3 bg-teal-600 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
