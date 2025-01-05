import { Metadata } from 'next'
import { Suspense } from 'react'
//import Loader from '@/components/Loader'
import pro-gride from '@/components/productgrid/proGride'

export const metadata: Metadata = {
  title: 'Our Products | SHOP.CO',
  description: 'Explore our wide range of stylish clothing and accessories. Find the perfect outfit that matches your unique style at SHOP.CO.',
  openGraph: {
    title: 'Our Products | SHOP.CO',
    description: 'Explore our wide range of stylish clothing and accessories. Find the perfect outfit that matches your unique style.',
    type: 'website',
    url: 'https://www.shopco-.vercel.app/products',
    images: [
      {
        url: '/images/products-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'SHOP.CO Products',
      },
    ],
  },
}

export default function Products() {
  return (
      <Suspense fallback={<div>{<Loader />}</div>}>
        <proGride />
      </Suspense>
 
  )
}