import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setDisplayed(data.products);
      });

    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    let filtered = category === "all" ? products : products.filter(p => p.category === category);
    if (sortOrder === "asc") filtered.sort((a, b) => a.price - b.price);
    else if (sortOrder === "desc") filtered.sort((a, b) => b.price - a.price);
    setDisplayed([...filtered]);
  }, [category, sortOrder, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Filter & Sort */}
      <div style={{ marginBottom: "20px" }}>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="all">All Categories</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} style={{ marginLeft: "10px" }}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <ul>
        {displayed.map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>
              {p.title} - ₹{p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
