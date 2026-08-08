import React from 'react'
import { Link } from 'react-router-dom' 

const Products = ({ products, loading, error, category, handleCategory }) => {

    const categories = [
        "all",
        "groceries",
        "beauty",
        "fragrances",
        "furniture",

    ];

  return (
    <section id="products">
      <div className="mx-auto my-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl">Products</h1>
          </div>
          <div className="flex flex-wrap items-center gap-8 overflow-x-auto pb-2 md:pb-0">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategory(item)}
                className={` text-lg font-semibold transition-colors duration-200 cursor-pointer ${
                  category === item
                    ? " text-blue-600 border-b-2"
                    : " text-gray-700 "
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 max-w-8xl mx-auto">
          {loading && (
            <div className="flex justify-center items-center py-8">
              <p className="text-center text-lg font-medium text-gray-500">Loading products...</p>
            </div>
          )}
          {error && <p className="text-center text-lg font-medium text-red-500">{error}</p>}

          {!loading && products.length === 0 ? (
            <p className="text-center text-lg font-medium text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden bg-gray-100">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-4 text-center sm:text-left">
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{product.title}</h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description || product.title}</p>
                    <div className="flex flex-col gap-1 pt-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${product.availabilityStatus === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {product.availabilityStatus}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products