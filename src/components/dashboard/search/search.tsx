import { MdSearch } from "react-icons/md";

type SearchProps = {
    placeholder?: string;
};

export default function Search({ placeholder }: SearchProps) {
    return (
        <div className="flex items-center gap-2 bg-bgSofter p-2 rounded-lg w-max">
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className=" bg-transparent border-none text-white outline-none"
            />
        </div>
    );
}
