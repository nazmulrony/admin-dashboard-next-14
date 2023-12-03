import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

export default function UsersPage() {
    return (
        <div className="bg-bgSoft p-5 rounded-lg mt-5">
            <div className="flex items-center justify-between">
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className="p-2 bg-[#5d57c9] to-white border-none rounded cursor-pointer">
                        Add New
                    </button>
                </Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="p-2">Name</td>
                        <td className="p-2">Email</td>
                        <td className="p-2">Created At</td>
                        <td className="p-2">Role</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/avatar.jpg"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                Nazmul Rony
                            </div>
                        </td>
                        <td className="p-2">nazmulrony@gmail.com</td>
                        <td className="p-2">03.12.2023</td>
                        <td className="p-2">Admin</td>
                        <td className="p-2">active</td>
                        <td className="p-2">
                            <div className="flex gap-2">
                                <Link href="/">
                                    <button className="py-1 rounded px-2 text-white cursor-pointer bg-teal-600">
                                        View
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="py-1 rounded px-2 text-white cursor-pointer bg-red-500">
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}
