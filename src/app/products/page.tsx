import { Metadata } from 'next';
import { Suspense } from 'react';
import { ProGrid } from '@/components/productsgrid/proGrid';

export const metadata: Metadata = {
  title: 'Our Products | SHOP.CO',
  description: 'Explore our wide range of stylish clothing and accessories. Find the perfect outfit that matches your unique style at SHOP.CO.',
};

export default function Products() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProGrid />
    </Suspense>
  );
}