import { menuItems } from "@/dummyData";
import MenuLink from "./menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { auth, signOut } from "@/auth";

export default async function Sidebar() {
    const session = await auth();
    console.log(session);
    return (
        <div className="sticky top-10">
            <div className="flex items-center gap-5 mb-5">
                <Image
                    src={session?.user?.image || "/avatar.jpg"}
                    alt=""
                    height={50}
                    width={50}
                    className=" rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">{session?.user?.name}</span>
                    <span className="text-xs text-textSoft">Administrator</span>
                </div>
            </div>
            <ul>
                {menuItems.map((cat: any) => (
                    <li key={cat.title}>
                        <span className="text-textSoft font-bold text-[13px] my-[10px] ">
                            {cat.title}
                        </span>
                        {cat.list.map((item: any) => (
                            <MenuLink key={item.title} item={item} />
                        ))}
                    </li>
                ))}
            </ul>
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button className="p-5 my-[5px] flex items-center gap-[10px] cursor-pointer rounded-lg bg-transparent w-full hover:bg-bgSofter">
                    <MdLogout /> Logout
                </button>
            </form>
        </div>
    );
}
