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
            className={`p-5 flex items-center gap-2 rounded-xl hover:bg-[#2e374a] ${
                path === pathname && "bg-[#2e374a]"
            }`}
        >
            {icon}
            {title}
        </Link>
    );
}
