import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

export default function RightBar() {
    return (
        <div className=" sticky top-5">
            <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-5 ">
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                    <Image
                        src="/astronaut.png"
                        alt=""
                        fill
                        className="object-contain opacity-20"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🔥 Available Now</span>
                    <h3 className="text-lg font-bold">
                        How to Use the new version of the admin dashboard?
                    </h3>
                    <span className="font-semibold text-xs text-textSoft">
                        Takes 4 minutes to learn
                    </span>
                    <p className="font-semibold text-xs text-textSoft">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum, rem. Ipsam, consequatur aut facilis fuga.
                    </p>
                    <button className="p-2 flex items-center gap-2 bg-[#5d57c9] w-max text-white border-none cursor-pointer rounded">
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-5 ">
                <div className="flex flex-col gap-6">
                    <span className="font-bold">🚀 Coming Soon</span>
                    <h3 className="text-lg font-bold">
                        New server actions are available, partial pre-rendering
                        is coming-up!
                    </h3>
                    <span className="font-semibold text-xs text-textSoft">
                        Boost your productivity
                    </span>
                    <p className="font-semibold text-xs text-textSoft">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum, rem. Ipsam, consequatur aut facilis fuga.
                    </p>
                    <button className="p-2 flex items-center gap-2 bg-[#5d57c9] w-max text-white border-none cursor-pointer rounded">
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    );
}
