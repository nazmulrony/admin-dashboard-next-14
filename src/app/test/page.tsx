export default function Test() {
    const handleForm = async (formData: FormData) => {
        "use server";
        console.log(Object.entries(formData));
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
