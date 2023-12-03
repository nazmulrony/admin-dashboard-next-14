export default function Pagination() {
    return (
        <div className="flex p-2 justify-between text-black">
            <button
                disabled
                className="py-1 px-2 cursor-pointer  disabled:bg-zinc-500 disabled:cursor-not-allowed bg-zinc-200"
            >
                Next
            </button>
            <button className="py-1 px-2 cursor-pointer disabled:bg-zinc-500  disabled:cursor-not-allowed bg-zinc-200">
                Previous
            </button>
        </div>
    );
}
