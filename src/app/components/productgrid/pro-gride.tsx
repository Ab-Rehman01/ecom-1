"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";


import { cn } from "@/lib/utils";
import { satoshi } from "@/app/ui/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ProductCard } from "../productcard/Product_Card";
// import {Filters} from "../filter/Filters";

const products = [
  {
    id: "1",
    title: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/g-graphic-t-shirt.png",
    discount: 20,
  },
  {
    id: "2",
    title: "Polo with Tipping Details",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/polo.png",
    discount: 22,
  },
  {
    id: "3",
    title: "T-shirt with Tape Details",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/tape-tshirt.png",
    discount: 22,
  },
  {
    id: "4",
    title: "Skinny Fit Jeans",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/skinny-jeans.png",
    discount: 22,
  },
  {
    id: "5",
    title: "Checkered Shirt",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/checkered-tshirt.png",
    discount: 22,
  },
  {
    id: "6",
    title: "Sleeve Striped T-shirt",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/sleave-tshirt.png",
    discount: 22,
  },
  {
    id: "7",
    title: "Vertical Striped Shirt",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/vertical-shirt.png",
    discount: 22,
  },
  {
    id: "8",
    title: "Courage Graphic T-shirt",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/graphic-tshirt.png",
    discount: 22,
  },
  {
    id: "9",
    title: "Loose Fit Bermuda Shorts",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/loose-shorts.png",
    discount: 22,
  },
  {
    id: "10",
    title: "Faded Skinny Jeans",
    price: 180,
    originalPrice: 242,
    rating: 4.5,
    reviews: 150,
    image: "/products/faded-jeans.png",
    discount: 22,
  },
  // Add more products...
];

const sortOptions = [
  { label: "Most Popular", value: "most-popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-low-high" },
  { label: "Price: High to Low", value: "price-high-low" },
];

export function ProductsGrid() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">All Products</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1
            className={cn(
              "text-xl sm:text-2xl lg:text-3xl font-bold",
              satoshi.className
            )}
          >
            All Products
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-gray-500 text-sm sm:text-base font-normal">
              Showing 1-12 of 100 Products
            </span>
            <div className="flex items-center gap-4">
              <button
                className="sm:hidden flex items-center gap-2 px-3 py-2 border rounded-lg"
                onClick={() => setIsFilterOpen(true)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-sm">Filters</span>
              </button>

              
            </div>
          </div>
        </div>

        <div className="flex gap-8">
         
          <div className="hidden lg:block">
  
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="cursor-pointer"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

          
            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-1 sm:gap-2">
              <button className="p-1 sm:p-2 border rounded-lg hover:border-black transition-colors">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              {[1, 2, 3, "...", 9, 10].map((page, i) => (
                <button
                  key={i}
                  className={cn(
                    "px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base",
                    page === 1 ? "bg-black text-white" : "hover:bg-gray-100"
                  )}
                >
                  {page}
                </button>
              ))}
              <button className="p-1 sm:p-2 border rounded-lg hover:border-black transition-colors">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
