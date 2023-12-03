import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="bg-bgSoft p-5 rounded-lg mt-5">
            <div className="flex items-center justify-between">
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/products/add">
                    <button className="p-2 bg-[#5d57c9] to-white border-none rounded cursor-pointer">
                        Add New
                    </button>
                </Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="p-2">Title</td>
                        <td className="p-2">Description</td>
                        <td className="p-2">Price</td>
                        <td className="p-2">Created At</td>
                        <td className="p-2">Stock</td>
                        <td className="p-2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/noproduct.jpg"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                Iphone
                            </div>
                        </td>
                        <td className="p-2">Lorem ipsum dolor sit amet.</td>
                        <td className="p-2">$123</td>
                        <td className="p-2">December 3, 2023</td>
                        <td className="p-2">34</td>
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
