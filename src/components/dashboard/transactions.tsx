import Image from "next/image";

export default function Transactions() {
    return (
        <div className=" bg-bgSoft p-5 rounded-lg">
            <h2 className="mb-5 font-extralight text-textSoft">
                Latest Transactions
            </h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="p-2">Name</td>
                        <td className="p-2">Status</td>
                        <td className="p-2">Date</td>
                        <td className="p-2">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/avatar.jpg"
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                John Doe
                            </div>
                        </td>
                        <td className="p-2">
                            <span
                                className={`rounded p-1 text-sm text-white bg-amber-600 400`}
                            >
                                Pending
                            </span>
                        </td>
                        <td className="p-2">14.02.2024</td>
                        <td className="p-2">$12.00</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/avatar.jpg"
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                John Doe
                            </div>
                        </td>
                        <td className="p-2">
                            <span
                                className={`rounded p-1 text-sm text-white bg-amber-600 400`}
                            >
                                Pending
                            </span>
                        </td>
                        <td className="p-2">14.02.2024</td>
                        <td className="p-2">$12.00</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/avatar.jpg"
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                John Doe
                            </div>
                        </td>
                        <td className="p-2">
                            <span
                                className={`rounded p-1 text-sm text-white bg-zinc-600 400`}
                            >
                                Done
                            </span>
                        </td>
                        <td className="p-2">14.02.2024</td>
                        <td className="p-2">$12.00</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/avatar.jpg"
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                John Doe
                            </div>
                        </td>
                        <td className="p-2">
                            <span
                                className={`rounded p-1 text-sm text-white bg-red-600 400`}
                            >
                                Cancelled
                            </span>
                        </td>
                        <td className="p-2">14.02.2024</td>
                        <td className="p-2">$12.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
