import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="grid place-items-center h-screen text-center">
            <div>
                <h2 className="text-xl">Welcome to Next 14</h2>
                <h2 className="text-3xl">
                    <span className="text-teal-500 font-bold hover:text-teal-200 transition">
                        Admin Dashboard
                    </span>{" "}
                    Project
                </h2>
                <div className="border border-teal-500 my-4 py-2">
                    <p>Username: nazmulrony</p>
                    <p>Password: 123456</p>
                </div>
                <Link href={"/dashboard"}>
                    <button
                        type="submit"
                        className="px-7 w-full py-3 bg-teal-600 text-white rounded mt-5"
                    >
                        Dive into the Project
                    </button>
                </Link>
            </div>
        </main>
    );
}
