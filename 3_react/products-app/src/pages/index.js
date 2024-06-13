"use client"

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";
import List from "@/components/ListProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //declaring constants
  const CONSTANTS = {
    CATEGORY_ALL: 'all',
    INPUT_SEARCH: 'input-search',
    SELECT_CATEGORY: 'select-category'
  }
  const productApi = 'https://dummyjson.com/products';

  //inititalizing state variables
  const [productlist, setProductList] = useState([]);
  const [SearchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CONSTANTS.CATEGORY_ALL);

  // fn to get unique product categories
  function getCategories() {
    let catergories = [CONSTANTS.CATEGORY_ALL];

    productlist.forEach(element => {
      if (!catergories.includes(element.category)) {
        catergories.push(element.category);
      }
    });

    return catergories;
  }

  // fn to update input and category change
  function handleOnChange(e) {
    let name = e.target.name;

    name === CONSTANTS.INPUT_SEARCH ?
      setSearchValue(e.target.value) :
      setSelectedCategory(e.target.value);
  }

  // fn that does all kinds of filtering
  function getFilteredProducts() {
    // filter out based on SearchValue
    const filteredBySearch = productlist.filter(product => product.title.toLowerCase().includes(SearchValue.toLowerCase()));
    // filter out based on selectedCategory
    const filteredByCategory = filteredBySearch.filter(product => product.category === selectedCategory);
    let finalFilteredList = [];

    //set final list after all filtering is done
    finalFilteredList = selectedCategory === CONSTANTS.CATEGORY_ALL ?
      filteredBySearch : filteredByCategory;

    return finalFilteredList;
  }
  // list used for rendering
  const filterList = getFilteredProducts();

  //fetch only once when page is loaded
  useEffect(() => {

    // fn to fetch all product details from api
    async function fetchProductList() {
      let prodcutResponse = await fetch(productApi);
      let readableProductResponse = await prodcutResponse.json();

      // set single source of truth (OG list)
      setProductList(readableProductResponse.products);
    }
    fetchProductList()

  }, []);

  //returns heading and searchbar along with the List component
  return (

    <div className="maindiv">

      <h1>Search Product</h1>

      <div className="littlediv">
        <input name="input-search" value={SearchValue} type="text" placeholder="Type the product name" onChange={handleOnChange}></input>
        <select value={selectedCategory} name="select-category" onChange={handleOnChange}>
          {/* map unique categories as options */}
          {getCategories().map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>

      {/* imported List component */}
      <List list={filterList}></List>

    </div>

  )
}