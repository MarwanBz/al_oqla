import { useEffect, useState } from "react";

import { FilterBar } from "./components/FilterBar";
import { Navbar } from "./components/Navbar";
import { ProductCatalog } from "./components/ProductCatalog";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newData = await response.json();
        setFilteredProducts(newData);
        setProducts(newData); // Initialize products with the full list
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const newData = await response.json();
        setCategories(newData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // filter catagories
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const filteredProductsCategory =
      category === "All"
        ? filteredProducts
        : filteredProducts.filter((product) => product.category === category);

    setProducts(filteredProductsCategory);
  };

  if (loadingProducts || loadingCategories) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleCategoryChange}
      />
      <ProductCatalog products={products} />
    </>
  );
}

export default App;
