"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { satoshi } from "@/app/ui/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProductCard } from "../productcard/Product_Card";

// Define product type to match WordPress API data
interface Product {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  price: string | null;
  _embedded?: {
    ["wp:featuredmedia"]?: [
      {
        source_url: string;
      }
    ];
  };
}

export function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]); // Fetched products
  const router = useRouter();

  // Fetch products from WordPress API
  useEffect(() => {
    fetch("https://bullet-mart.net.pk/wp-json/wp/v2/product?_embed")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const removeHtmlTags = (html: string): string => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

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
              Showing {products.length} Products
            </span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="cursor-pointer"
                >
                  <ProductCard
                    id={product.id.toString()}
                    title={product.title.rendered}
                    price={parseFloat(product.price || "0")}
                    originalPrice={parseFloat(product.price || "0") * 1.2} // Example: Adding 20% to original price
                    rating={4.5} // Static rating, replace with dynamic if available
                    reviews={150} // Static reviews, replace with dynamic if available
                    image={
                      product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/placeholder-image.png"
                    }
                    discount={20} // Static discount, replace if available dynamically
                  />
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