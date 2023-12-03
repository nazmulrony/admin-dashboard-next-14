import Image from "next/image";

export default function SingleUserPage() {
    return (
        <div className="flex gap-12 mt-5">
            <div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft h-max">
                <div className="w-full h-72 rounded-lg relative overflow-hidden">
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                Nazmul Rony
            </div>
            <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
                <form className="flex flex-col">
                    <label> Username</label>
                    <input
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        type="text"
                        name="username"
                        placeholder="Nazmul Rony"
                    />
                    <label> Email</label>
                    <input
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        type="email"
                        name="email"
                        placeholder="rony@gmail.com"
                    />
                    <label> Password</label>
                    <input
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        type="password"
                        name="password"
                    />
                    <label> Phone</label>
                    <input
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        type="text"
                        name="pone"
                        placeholder="Nazmul Rony"
                    />

                    <label> Address</label>
                    <textarea
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        name="address"
                    ></textarea>
                    <label> IsAdmin</label>
                    <select
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        name="isAdmin"
                        id="isAdmin"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label> IsActive</label>
                    <select
                        className="p-5 border-2 rounded bg-bgColor my-[10px]"
                        name="isActive"
                        id="isActive"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button className="px-7 w-full py-3 bg-teal-600 rounded mt-5">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
