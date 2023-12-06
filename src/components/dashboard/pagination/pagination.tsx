"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }: { count: number }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || "1";

    const params = new URLSearchParams(searchParams);

    const ITEMS_PER_PAGE = 2;

    const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1);
    const hasNext =
        ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;
    console.log(page);
    const handleChangePage = (type: string) => {
        type === "prev"
            ? //@ts-ignore
              params.set("page", parseInt(page as string) - 1)
            : //@ts-ignore
              params.set("page", parseInt(page) + 1);

        replace(`${pathname}?${params}`);
    };

    return (
        <div className="flex p-2 justify-between text-black">
            <button
                onClick={() => handleChangePage("prev")}
                disabled={!hasPrev}
                className="py-1 px-2 cursor-pointer  disabled:bg-zinc-500 disabled:cursor-not-allowed bg-zinc-200"
            >
                Previous
            </button>
            <button
                onClick={() => handleChangePage("next")}
                disabled={!hasNext}
                className="py-1 px-2 cursor-pointer disabled:bg-zinc-500  disabled:cursor-not-allowed bg-zinc-200"
            >
                Next
            </button>
        </div>
    );
}
