"use client";

import { FormEvent, useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./search/SearchBar";

export default function FilterableProductTable() {
  const [inStock, setInStock] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  function handleSearchInput (e:FormEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value
    console.log("ASD search",value)
    setSearchInput(value)
  }
  return (
    <>
      <div className="border-2 w-[31.25rem] p-2">
        <SearchBar inStock={inStock} onChecked={() => setInStock(!inStock)}  onInput={handleSearchInput}/>
        <ProductTable inStock={inStock} searchInput={searchInput}/>
      </div>
    </>
  );
}
