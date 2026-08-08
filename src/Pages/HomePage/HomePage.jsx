import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Products from '../../Components/Products/Products'
import { getProducts} from '../../api/product'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState("all");


  useEffect(() =>{
    const fetchProducts = async () =>{
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError("Failed to fetch Products.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  },[search]);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setFilteredProducts(products);
      return;
    } 

    const result = products.filter((products) =>(
      products.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    ))
    setFilteredProducts(result);
  },[debouncedSearch, products]);

    const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory);

    if (selectedCategory === "all") {
      setFilteredProducts(products);
      return;
    }

    const result = products.filter(
      (product) => product.category === selectedCategory
    );

    setFilteredProducts(result);
  };

  return (
    <div>
        <Navbar search={search} setSearch={setSearch} />
        <Header/>
        <Products products={filteredProducts}
          loading={loading}
          error={error}
          category={category}
          handleCategory={handleCategory}
        />
        
    </div>
  )
}

export default HomePage