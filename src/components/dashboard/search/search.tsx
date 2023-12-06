"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
    placeholder?: string;
};

export default function Search({ placeholder }: SearchProps) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const params = new URLSearchParams(searchParams);
            //when start typing it's reset to page 1
            params.set("page", "1");

            if (e.target.value) {
                e.target.value.length > 2 && params.set("q", e.target.value);
            } else {
                params.delete("q");
            }
            replace(`${pathname}?${params}`);
        },
        300
    );

    return (
        <div className="flex items-center gap-2 bg-bgSofter p-2 rounded-lg w-max">
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className=" bg-transparent border-none text-white outline-none"
                onChange={handleSearch}
            />
        </div>
    );
}
