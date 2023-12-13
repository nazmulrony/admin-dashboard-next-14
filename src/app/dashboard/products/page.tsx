import Pagination from '@/components/dashboard/pagination/pagination';
import Search from '@/components/dashboard/search/search';
import { deleteProduct } from '@/lib/actions';
import { fetchProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type SearchParamsProps = {
	[key: string]: string;
};

export default async function ProductsPage({ searchParams }: { searchParams: SearchParamsProps }) {
	const q = searchParams?.q;
	const page = searchParams?.page || '1';

	const { count, products } = await fetchProducts(q, page);

	return (
		<div className="bg-bgSoft p-5 rounded-lg mt-5">
			<div className="flex items-center justify-between">
				<Search placeholder="Search for a user..." />
				<Link href="/dashboard/products/add">
					<button className="p-2 bg-[#5d57c9] to-white border-none rounded cursor-pointer">
						Add New
					</button>
				</Link>
			</div>
			<table className="w-full">
				<thead>
					<tr>
						<td className="p-2">Title</td>
						<td className="p-2">Description</td>
						<td className="p-2">Price</td>
						<td className="p-2">Created At</td>
						<td className="p-2">Stock</td>
						<td className="p-2">Actions</td>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product?.title}>
							<td className="p-2">
								<div className="flex items-center gap-2">
									<Image
										src={product?.img || '/noproduct.jpg'}
										alt=""
										width={40}
										height={40}
										className="rounded-full object-cover"
									/>
									{product?.title}
								</div>
							</td>
							<td className="p-2">{product?.desc}</td>
							<td className="p-2">${product?.price}</td>
							<td className="p-2">{product?.createdAt?.toString().slice(4, 16)}</td>
							<td className="p-2">{product?.stock}</td>
							<td className="p-2">
								<div className="flex gap-2">
									<Link href={`/dashboard/products/${product?._id}`}>
										<button className="py-1 rounded px-2 text-white cursor-pointer bg-teal-600">
											View
										</button>
									</Link>

									<form action={deleteProduct}>
										<input type="hidden" value={product?._id} name="id" />
										<button className="py-1 rounded px-2 text-white cursor-pointer bg-red-500">
											Delete
										</button>
									</form>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination count={count} />
		</div>
	);
}
