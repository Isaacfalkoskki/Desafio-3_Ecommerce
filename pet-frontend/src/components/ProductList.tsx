import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product } from '../types/Products'
import { ProductGrid } from '../components/ProductGrid'

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    console.log("🔍 Buscando produtos...");
    axios.get('http://localhost:3000/products')
      .then((res) => {
        console.log("✅ Produtos recebidos:", res.data)
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar produtos:", err)
      });
  }, []);

  return (
    
      <ProductGrid products={products} />
    
  )

}
