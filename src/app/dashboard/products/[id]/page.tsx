import { fetchProduct } from "@/lib/data";
import Image from "next/image";

export default async function SingleProductPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const product = await fetchProduct(id);
    return (
        <div className="flex gap-12 mt-5">
            <div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft h-max">
                <div className="w-full h-72 rounded-lg relative overflow-hidden">
                    <Image
                        src={product?.img || "/avatar.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                {product?.title}
            </div>
            <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
                <form className="flex flex-col">
                    <label> Title</label>
                    <input
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        type="text"
                        name="title"
                        defaultValue={product?.title}
                        placeholder="Nazmul Rony"
                    />
                    <label> Price</label>
                    <input
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        type="number"
                        name="price"
                        defaultValue={product?.price}
                        placeholder="rony@gmail.com"
                    />
                    <label> Stock</label>
                    <input
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        type="number"
                        name="stock"
                        defaultValue={product?.stock}
                    />
                    <label> Color</label>
                    <input
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        type="text"
                        name="color"
                        placeholder="Nazmul Rony"
                        defaultValue={product?.color}
                    />

                    <label> Size</label>
                    <input
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        name="size"
                        defaultValue={product?.size}
                    />
                    <label> Category</label>
                    <select
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                        name="cat"
                        id="cat"
                    >
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label> Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        defaultValue={product?.desc}
                        placeholder="description"
                        className="p-5 border-2 border-gray-600 rounded bg-bgColor my-[10px]"
                    ></textarea>
                    <button className="px-7 w-full py-3 bg-teal-600 rounded mt-5">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
