"use client";

import { usePathname } from "next/navigation";
import { Input } from "postcss";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="bg-bgSoft rounded-lg  p-10  flex justify-between items-center  ">
            <div className="font-bold text-textSoft capitalize">
                {pathname.split("/").pop()}
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 bg-bgSofter p-2 rounded-lg">
                    <MdSearch />
                    <input
                        placeholder="search..."
                        className="bg-transparent outline-none border-none"
                    />
                </div>
                <div className="flex items-center gap-5">
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
}
