import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
import './css/FilterableProductTable.css'
export default function FilterableProductTable() {
    let [valSearch,setValSearch]=useState("");
    let [search,isSearch]=useState(false);
    let [stocked,isStocked]=useState(false);
    let isStockOny
    function handleValue(event) {
        setValSearch(event.target.value);
        isSearch(false);
    }
    function handleSearch()
    {
        isSearch(true);
    }
    function handleStocked(event)
    {
        isStocked(event.target.checked);
    }
    let changes={
        val:valSearch,
        searched:search,
        stock:stocked,
    }
  return (
    <div className="Filter">
        <SearchBar handleValue={handleValue}  handleSearch={handleSearch} handleStocked={handleStocked}/>
        <ProductTable changes={changes}/>
    </div>
  )
}
