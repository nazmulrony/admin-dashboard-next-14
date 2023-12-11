export default function Test() {
    const handleForm = async (formData: FormData) => {
        "use server";
        console.log(formData);
        const username = formData.get("username");
        console.log(Object.entries(formData));
        console.log(username);
    };
    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <input type="text" name="email" />
                <button>Submit</button>
            </form>
        </div>
    );
}
