interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export default function ProductRow({ product }: { product: Product }) {
  return (
    <>
      <tr className="text-left">
        <td className={product.stocked ? "" : "text-[#ff0000]"}>
          {product.name}
        </td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}
