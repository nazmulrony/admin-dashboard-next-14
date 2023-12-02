import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
    return (
        <div className="bg-bgSoft p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-bgSofter transition">
            <MdSupervisedUserCircle />
            <div className="flex flex-col">
                <span>Total Users</span>
                <span className="text-2xl font-semibold">10.273</span>
                <span className="text-sm font-light">
                    <span className={`text-green-500`}>12%</span> more than
                    present
                </span>
            </div>
        </div>
    );
}
