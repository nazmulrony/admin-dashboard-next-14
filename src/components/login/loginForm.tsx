export default function LoginForm() {
    return (
        <div>
            <form
                action=""
                className="bg-bgSoft p-12 rounded-lg w-[500px] h-[500px] flex flex-col gap-7 justify-center items-center"
            >
                <h2 className="text-2xl font-bold">Login</h2>
                <input
                    className="p-5 w-full border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                    type="text"
                    placeholder="username"
                    name="username"
                />
                <input
                    className="p-5 w-full border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <button
                    type="submit"
                    className="px-7 w-full py-3 bg-teal-600 rounded mt-5"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
