export default function ProductCategoryRow({ category }: { category: string }) {
  return (
    <>
      <tr className="w-full">
        <td colSpan={2} className="text-center font-bold">
          {category}
        </td>
      </tr>
    </>
  );
}
