"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type MenuLinkProps = {
    item: {
        path: string;
        title: string;
        icon: ReactNode;
    };
};

export default function MenuLink({
    item: { icon, path, title },
}: MenuLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={`p-5 my-[5px] flex items-center gap-2 rounded-lg hover:bg-bgSofter ${
                path === pathname && "bg-[#2e374a]"
            }`}
        >
            {icon}
            {title}
        </Link>
    );
}
