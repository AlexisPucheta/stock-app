import { FormEvent } from "react";

export default function SearchBar({
  inStock,
  onChecked,
  onInput
}: {
  inStock: boolean;
  onChecked: () => void;
  onInput: (e:FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input placeholder="Search..." type="text" className="w-full border mb-2" onInput={onInput}/>
      <label>
        <input
          type="checkbox"
          name="inStock"
          defaultChecked={inStock}
          onInput={onChecked}
          className="mr-2"
        />
        Only show products in stock
      </label>
    </>
  );
}
