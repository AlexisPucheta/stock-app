import ProductCategoryRow from "./product/ProductCategoryRow";
import ProductRow from "./product/ProductRow";
import products from "../mock/product";

export default function ProductTable({ inStock, searchInput }: { inStock: boolean, searchInput: string }) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        searchInput.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });
  return (
    <>
      <div className="border-2 w-full">
        <table className="w-full">
          <thead>
            <tr className="border">
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}
