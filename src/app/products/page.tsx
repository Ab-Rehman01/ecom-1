import { Metadata } from "next";

import { Suspense } from "react";
import { ProductsGrid } from "../components/productgrid/pro-gride";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our wide range of stylish clothing and accessories. Find the perfect outfit that matches your unique style at SHOP.CO.",
  openGraph: {
    title: "SHOP.CO",
    description:
      "Explore our wide range of stylish clothing and accessories. Find the perfect outfit that matches your unique style.",
    type: "website",
    images: [
      {
        url: "/products/images/products-banner.jpg",
        width: 1200,
        height: 630,
        alt: "SHOP.CO Products",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsGrid />
    </Suspense>
  );
}
