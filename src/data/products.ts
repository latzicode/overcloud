export interface Product {
  id: string
  title: string
  description: string
  imagePath: string
  price: string
}

export const products: Product[] = [
  {
    id: '2',
    title: 'Cyber Edge',
    description: 'Edition limitée',
    imagePath: '/images/products/collectioncover1.png',
    price: '49.99 €'
  },
  {
    id: '5',
    title: 'Digital Wave',
    description: 'Collection 2024',
    imagePath: '/images/products/collectioncover2.png',
    price: '45.99 €'
  },
  {
    id: '3',
    title: 'Neon Dreams',
    description: 'Série Exclusive',
    imagePath: '/images/products/collectioncover3.png',
    price: '54.99 €'
  },
  {
    id: '4',
    title: 'Future Pulse',
    description: 'Nouvelle Collection',
    imagePath: '/images/products/collectioncover4.png',
    price: '47.99 €'
  },
  {
    id: '6',
    title: 'Cloud Nine',
    description: 'Édition Spéciale',
    imagePath: '/images/products/collectioncover5.png',
    price: '52.99 €'
  },
  {
    id: '1',
    title: 'Cyber Flux',
    description: 'Série Limitée',
    imagePath: '/images/products/collectioncover6.png',
    price: '49.99 €'
  }
] 