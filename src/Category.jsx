import React, { useState, useEffect } from "react";
import Footer from "./Componenets/Fotter";
import Nevbar from "./Componenets/Nevbar";
import { Link } from "react-router-dom";

import pngwing4 from "./assets/pngwing 4.png";
import pngwing7 from "./assets/pngwing 7.png";
import pngwing6 from "./assets/pngwing 6.png";
import pngwing3 from "./assets/pngwing 3.png";
import frame45 from "./assets/Frame 45.png";

function Category() {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [singleCategory, setSingleCategory] = useState(null);
  const [singleId, setSingleId] = useState("");

  // ✅ Fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("https://ecommerce-shop-qg3y.onrender.com/api/category/displayAllCategory");
      const result = await res.json();
      if (result.success && Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        console.error("Error fetching categories:", result.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  // ✅ Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!name || !imageFile) {
      alert("Category name and image file are required.");
      return;
    }

    const formData = new FormData();
    formData.append("category_name", name);
    formData.append("category_photo", imageFile);

    try {
      const response = await fetch("https://ecommerce-shop-qg3y.onrender.com/api/category/addCategory", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Category added successfully");
        setName("");
        setImageFile(null);
        document.getElementById("imageUpload").value = "";
        fetchCategories();
      } else {
        alert("Failed to add category: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the category.");
    }
  };

  // ✅ Fetch single category by ID
  const handleFetchSingleCategory = async () => {
    if (!singleId.trim()) return;

    try {
      const res = await fetch(`https://ecommerce-shop-qg3y.onrender.com/api/category/displayCategory?id=${singleId}`);
      const result = await res.json();

      if (result.success && result.data) {
        setSingleCategory(result.data);
      } else {
        alert("Category not found or invalid ID");
      }
    } catch (error) {
      console.error("Error fetching single category:", error);
    }
  };

  return (
    <div>
      <Nevbar />

      {/* ➕ Add Category Form */}
      <div className="max-w-xl mx-auto p-6 my-10 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="space-y-4 flex gap-4 flex-col">
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-red-500 text-white items-center w-50 justify-center flex px-4 py-2 rounded hover:bg-red-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* 🔍 Search Category by ID */}
      <div className="max-w-xl mx-auto mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Enter Category ID"
          value={singleId}
          onChange={(e) => setSingleId(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleFetchSingleCategory}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Load Category
        </button>
      </div>

      {/* 🧩 Display Static, Dynamic, and Single Category */}
      <div className="bg-white text-center px-4 sm:px-6 lg:px-20 py-10">
        <p className="text-sm sm:text-base lg:text-xl text-red-500 font-semibold uppercase mb-2">
          Customer Favorites
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
          Popular Categories
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Static Cards */}
          <CategoryCard title="Main Dish" img={pngwing4} count="86 dishes" />
          <CategoryCard title="Break Fast" img={pngwing6} count="12 break fast" />
          <CategoryCard title="Dessert" img={pngwing3} count="48 dessert" />
          <CategoryCard title="Browse All" img={pngwing7} count="255 Items" />
          <CategoryCard title="Breakfast Food" img={frame45} count="205 Items" />

          {/* Dynamic Cards from displayAllCategory */}
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              title={category.category_name}
              img={`https://ecommerce-shop-qg3y.onrender.com/category/${category.category_photo}`}
              count="Browse"
            />
          ))}

          {/* Single Category Card (by ID) */}
          {singleCategory && (
            <CategoryCard
              title={singleCategory.category_name}
              img={singleCategory.category_photo}
              count="Fetched by ID"
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// 🧱 Reusable Card
function CategoryCard({ title, img, count }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg relative">
      <div className="bg-yellow-50 rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
        <Link to="/Productlist2">
          <img src={img} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
        </Link>
      </div>
      <h3 className="font-bold text-gray-900 mt-4 text-base sm:text-lg md:text-xl">{title}</h3>
      <p className="text-sm sm:text-base text-gray-500 font-medium">({count})</p>
    </div>
  );
}

export default Category;
